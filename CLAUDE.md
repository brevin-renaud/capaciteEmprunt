# CLAUDE.md - CapaciteEmprunt

Simulateur premium de capacité d'emprunt immobilier français. State partageable via URL, blog avec système d'admin, base PostgreSQL via Supabase.

## Stack technique

| Outil | Version |
|---|---|
| Next.js (App Router) | 16.2.4 |
| React | 19.2.5 |
| TypeScript (strict) | 6.0.3 |
| Tailwind CSS | 4.2.4 |
| Framer Motion | 12.38.0 |
| Lucide React | 1.14.0 |
| lz-string | 1.5.0 |
| Prisma + @prisma/client | 5.22.0 |
| Zod | 4.4.3 |
| marked | 18.0.3 |

**Points d'attention :**
- Tailwind v4 : config via `@theme` dans [globals.css](src/app/globals.css), **pas** via `tailwind.config.ts`
- Icône alerte Lucide : `TriangleAlert` (pas `AlertTriangle`)
- Turbopack activé par défaut via `next dev`
- Variables d'env nécessaires : `DATABASE_URL`, `DIRECT_URL`, `ADMIN_PASSWORD`, `NEXT_PUBLIC_APP_URL`

## Commandes

```bash
npm run dev          # Serveur de développement → localhost:3000
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # ESLint (config next/core-web-vitals)
npm run typecheck    # tsc --noEmit (mode strict)
npm run db:generate  # Met à jour le client Prisma après modif schema
npm run db:push      # Sync schema → DB (destructif, pas de migration)
npm run db:migrate   # Crée une migration versionnée
npm run db:studio    # UI web Prisma Studio
```

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx                    # Root layout (Navbar, OrganizationSchema, font Geist)
│   ├── page.tsx                      # Page d'accueil (hero, features, FAQ preview)
│   ├── globals.css                   # Styles globaux + @theme Tailwind + sliders + glass
│   ├── manifest.ts / robots.ts / sitemap.ts / opengraph-image.tsx
│   ├── simulateur/page.tsx           # Page simulateur (parse URL params → SimulatorTabs)
│   ├── faq/
│   │   ├── page.tsx                  # Page FAQ (SSR + FAQSchema JSON-LD)
│   │   └── FAQClient.tsx             # FAQ interactive (filtres, recherche)
│   ├── blog/
│   │   ├── page.tsx                  # Listing articles (getAllPostsAsync)
│   │   └── [slug]/page.tsx           # Article detail (markdown → React via marked)
│   ├── admin/
│   │   ├── layout.tsx                # Admin layout (vérifie auth)
│   │   ├── page.tsx                  # Login screen
│   │   ├── AdminLoginClient.tsx      # Formulaire login
│   │   └── articles/
│   │       ├── page.tsx              # Liste articles
│   │       ├── ArticlesListClient.tsx
│   │       ├── ArticleFormClient.tsx # Formulaire création/édition
│   │       ├── nouveau/page.tsx
│   │       └── [id]/page.tsx
│   ├── api/admin/
│   │   ├── login/route.ts            # POST → token cookie 24h
│   │   ├── logout/route.ts           # Supprime le cookie
│   │   └── articles/
│   │       ├── route.ts              # GET list / POST create
│   │       └── [id]/route.ts         # GET / PUT / DELETE
│   ├── a-propos/ / confidentialite/ / mentions-legales/
│   └── Guides SEO : guide-capacite-emprunt/ frais-de-notaire/ investissement-locatif/
│       pret-a-taux-zero-2026/ primo-accedant/ taux-immobilier-2026/
│
├── components/
│   ├── Navigation/Navbar.tsx         # Navbar sticky (desktop + mobile burger)
│   ├── Footer.tsx
│   ├── ClientLayout.tsx              # Wrapper client-side
│   ├── SEO/                          # JSON-LD schemas : FAQ, Article, Breadcrumb, HowTo, Organization
│   ├── blog/MarkdownRenderer.tsx     # marked → React
│   └── Simulator/
│       ├── UnifiedSimulator.tsx      # Orchestrateur (dual modes, AnimatePresence, deferred values)
│       ├── SimulatorTabs.tsx         # Tab switcher, traduit capacity ↔ optimization au changement de mode
│       ├── Inputs/
│       │   ├── InteractiveSliders.tsx    # Mode capacité : 5 sliders liés
│       │   ├── OptimizationSliders.tsx   # Mode optimisation : sliders (montant emprunt, salaire…)
│       │   └── ProjectToggle.tsx         # Toggle neuf / ancien
│       └── Results/
│           ├── Dashboard.tsx                  # 6 KPI cards avec AnimatedNumber
│           ├── HCSFGauge.tsx                  # Jauge taux d'endettement
│           ├── MultiDurationTable.tsx         # Comparatif 15 / 20 / 25 ans (mode capacité)
│           ├── OptimizationDashboard.tsx      # Dashboard mode optimisation
│           ├── OptimizationMultiDurationTable.tsx
│           └── UnifiedDashboard.tsx           # Partagé entre les deux modes
│
├── lib/
│   ├── calculator.ts        # Moteur de calcul financier (100 % synchrone, client-side)
│   ├── constants.ts         # HCSF, frais notaire, defaults, clés URL
│   ├── url-serializer.ts    # Encodage/décodage des inputs dans l'URL (Base36)
│   ├── prisma.ts            # Singleton Prisma client (évite l'épuisement de connexions Vercel)
│   ├── admin/auth.ts        # Token-based auth (cookie httpOnly 24h, ADMIN_PASSWORD env)
│   └── blog/index.ts        # Requêtes DB blog (getAllPostsAsync, getPostBySlugAsync…)
│
├── data/
│   └── faq.ts               # ~20 Q&R en 8 catégories
│
└── prisma/
    └── schema.prisma        # Modèle Article + index slug/publishedAt/isDraft
```

## Architecture clé

### Dual modes du simulateur

```
URL params → url-serializer.ts → SimulatorTabs (mode: "capacity" | "optimization")
                                        ↓
                             UnifiedSimulator (state, deferred values)
                                        ↓
                               calculator.ts (lib)
                                        ↓
               Dashboard + HCSFGauge + MultiDurationTable   (mode capacity)
               OptimizationDashboard + OptimizationMultiDurationTable  (mode optimization)
```

- **Mode capacité** : saisir le salaire → calculer la capacité d'emprunt max
- **Mode optimisation** : saisir un montant d'emprunt → calculer la faisabilité et scénarios
- SimulatorTabs traduit automatiquement les inputs lors du changement de mode (capacity → optimization utilise la capacité calculée comme montant de départ)
- Tout le state vit dans l'URL ; `pushToURL()` met à jour sans entrée historique

### Calculs financiers (`lib/calculator.ts`)

- **Mensualité** : formule d'annuité `P = M × [1 − (1+r)^(−n)] / r`
- **Taux mensuel** : `tauxAnnuel / 12 / 100`
- **Taux d'endettement HCSF** : plafond 35 % du salaire net
- **Frais de notaire** : 2,5 % (neuf) / 7,5 % (ancien)
- **Assurance** : `capital × taux × années`
- `simulate(inputs)` → résultat complet (mode capacité)
- `simulateMultipleDurations(inputs, [15,20,25])` → comparatif
- `optimizeLoan(inputs)` → résultats mode optimisation
- `optimizeLoanMultipleDurations(inputs, [15,20,25])` → comparatif optimisation

#### Règle apport / frais de notaire

L'apport saisi est un **apport total** (pas un apport net). Le moteur :

1. Calcule les frais de notaire sur le prix du bien
2. Soustrait les frais : `apportNet = apportTotal - fraisNotaire`
3. Si `apportNet < 0` : les frais non couverts s'ajoutent au capital (si HCSF le permet), sinon erreur explicite
4. Le Dashboard affiche les deux : **Apport total saisi** et **Apport net effectif**

### Comportement des sliders interdépendants

Les sliders **mensualité** et **capacité d'emprunt** sont liés en temps réel (bidirectionnel). C'est l'effet "Premium" intentionnel — **ne pas le casser**. L'Engine/UnifiedSimulator orchestre ; les sliders ne se synchronisent pas directement.

### Plages des sliders

| Slider | Min | Max | Pas |
|---|---|---|---|
| Salaire | 1 000 € | 30 000 € | 100 |
| Apport | 0 € | 500 000 € | 1 000 |
| Durée | 10 ans | 25 ans | 5 |
| Taux crédit | 0,5 % | 7,0 % | 0,05 |
| Taux assurance | 0,1 % | 1,0 % | 0,01 |

## Base de données (Prisma + Supabase)

Schema `capacite`, un seul modèle :

```prisma
model Article {
  id                 String    @id @default(uuid())
  slug               String    @unique
  title              String
  description        String
  content            String    // markdown
  author             String    @default("CapaciteEmprunt")
  category           String    @default("Immobilier")
  isDraft            Boolean   @default(true)
  publishedAt        DateTime?
  scheduledPublishAt DateTime?
  createdAt          DateTime  @default(now())
  updatedAt          DateTime  @updatedAt
}
```

- `isDraft: true` → caché du public
- `scheduledPublishAt` → publication différée
- Indexes sur `slug`, `publishedAt`, `isDraft`

## Système admin

Auth : cookie `admin_token` (httpOnly, sameSite=strict, 24h), généré côté serveur depuis `ADMIN_PASSWORD`.
Routes : `/admin` → login, `/admin/articles` → CRUD complet.
API : `/api/admin/articles` (GET list / POST create) + `/api/admin/articles/[id]` (GET / PUT / DELETE).

## Design system

| Token | Valeur | Usage |
|---|---|---|
| `brand-500` | `#003d2b` | Couleur principale (foncé) |
| `brand-400` | `#268e6b` | Secondaire |
| `brand-200` | `#80c0aa` | Accent clair |

Classes custom : `.glass` (backdrop blur léger), `.glass-strong` (blur fort, teinte teal).

## SEO

- `metadata` serveur sur chaque page (title, description)
- JSON-LD via composants dans `SEO/` : FAQ, Article, Breadcrumb, HowTo, Organization
- Blog : contenu markdown long-format, rich snippets via ArticleSchema
- `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`

## Conventions de code

- **Pas d'emojis** dans le code, les composants ou les textes UI — utiliser une icône Lucide React
- Alias d'import : `@/*` → `src/*`
- TypeScript strict : nulls explicites, pas de `any`
- Pas de commentaires sur le "quoi" — seulement sur le "pourquoi" si non-évident
- Pas de state management externe (pas de Zustand, Redux, etc.)
- Validation avec Zod aux boundaries API (routes admin)
