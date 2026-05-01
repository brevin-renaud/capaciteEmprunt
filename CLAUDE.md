# CLAUDE.md - EmpruntCapacity

Simulateur premium de capacité d'emprunt immobilier français, sans backend, avec état partageable via URL.

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

**Points d'attention :**
- Tailwind v4 : la config se fait via `@theme` dans [globals.css](src/app/globals.css), **pas** via `tailwind.config.ts`
- Icône alerte Lucide : `TriangleAlert` (pas `AlertTriangle`)
- Turbopack activé par défaut via `next dev`
- Aucune variable d'environnement nécessaire (100 % client-side)

## Commandes

```bash
npm run dev        # Serveur de développement → localhost:3000
npm run build      # Build de production
npm run start      # Serveur de production
npm run lint       # ESLint (config next/core-web-vitals)
npm run typecheck  # tsc --noEmit (mode strict)
```

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx                    # Root layout (RootLayout + Navbar)
│   ├── page.tsx                      # Page d'accueil (hero, features, FAQ preview)
│   ├── globals.css                   # Styles globaux + @theme Tailwind + sliders
│   ├── simulateur/page.tsx           # Page simulateur (initialise Engine avec URL params)
│   ├── faq/
│   │   ├── page.tsx                  # Page FAQ (SSR + FAQSchema JSON-LD)
│   │   └── FAQClient.tsx             # FAQ interactive (filtres, recherche)
│   ├── guide-capacite-emprunt/       # Guide éditorial
│   ├── frais-de-notaire/             # Guide frais notaire
│   ├── investissement-locatif/       # Guide investissement locatif
│   ├── pret-a-taux-zero-2026/        # Guide PTZ
│   ├── primo-accedant/               # Guide primo-accédant
│   └── taux-immobilier-2026/         # Guide taux immobiliers
│
├── components/
│   ├── Navigation/Navbar.tsx         # Navbar sticky (desktop + mobile burger)
│   ├── SEO/FAQSchema.tsx             # JSON-LD schema FAQ
│   └── Simulator/
│       ├── Engine.tsx                # Orchestrateur : state, effets, layout 2 colonnes
│       ├── Inputs/
│       │   ├── InteractiveSliders.tsx  # 5 sliders (salaire, apport, durée, taux)
│       │   └── ProjectToggle.tsx       # Toggle neuf / ancien
│       └── Results/
│           ├── Dashboard.tsx           # 6 KPI cards avec AnimatedNumber (Framer Motion)
│           ├── HCSFGauge.tsx           # Jauge taux d'endettement
│           └── MultiDurationTable.tsx  # Comparatif 15 / 20 / 25 ans
│
├── lib/
│   ├── calculator.ts                 # Moteur de calcul financier
│   ├── constants.ts                  # Constantes (HCSF, frais notaire, défauts, clés URL)
│   └── url-serializer.ts             # Encodage/décodage des inputs dans l'URL (Base36)
│
└── data/
    └── faq.ts                        # ~20 Q&R en 8 catégories
```

## Architecture clé

### Flux de données

```
URL params → url-serializer.ts → Engine.tsx (state)
                                      ↓
                              calculator.ts (lib)
                                      ↓
                    Dashboard + HCSFGauge + MultiDurationTable
```

- Tout le state simulator vit dans l'URL (pas de store global, pas de backend)
- `pushToURL()` met à jour l'adresse sans entrée dans l'historique (real-time)
- Les calculs sont synchrones et purement client-side

### Calculs financiers (`lib/calculator.ts`)

- **Mensualité** : formule d'annuité `P = M × [1 − (1+r)^(−n)] / r`
- **Taux mensuel** : `tauxAnnuel / 12 / 100`
- **Taux d'endettement HCSF** : plafond 35 % du salaire net
- **Frais de notaire** : 2,5 % (neuf) / 7,5 % (ancien)
- **Assurance** : `capital × taux × années`
- `simulate(inputs)` → résultat complet
- `simulateMultipleDurations(inputs, [15,20,25])` → comparatif

#### Règle apport / frais de notaire

L'apport saisi par l'utilisateur est un **apport total** (pas un apport net). Le moteur doit :

1. Calculer les frais de notaire sur le prix du bien (`apportTotal × tauxNotaire`)
2. Les soustraire de l'apport pour obtenir l'apport net : `apportNet = apportTotal - fraisNotaire`
3. Si `apportNet < 0` (apport insuffisant pour couvrir les frais) :
   - Les frais non couverts s'ajoutent au capital emprunté si la mensualité résultante reste sous le plafond HCSF
   - Sinon, la simulation est bloquée et un message d'erreur explicite est affiché
4. Le Dashboard affiche toujours les deux valeurs : **Apport total saisi** et **Apport net effectif**

### Comportement des sliders interdépendants (`InteractiveSliders.tsx`)

Les sliders **mensualité** et **capacité d'emprunt** sont liés en temps réel :

- Déplacer le slider mensualité → recalcule et met à jour instantanément la capacité d'emprunt affichée
- Déplacer le slider capacité → recalcule et met à jour instantanément la mensualité affichée
- Ce couplage bidirectionnel est intentionnel et constitue l'effet "Premium" de l'interface - **ne pas le casser**
- L'Engine.tsx est responsable de l'orchestration ; les sliders ne doivent pas se synchroniser directement entre eux

### Plages des sliders (`InteractiveSliders.tsx`)

| Slider | Min | Max | Pas |
|---|---|---|---|
| Salaire | 1 000 € | 30 000 € | 100 |
| Apport | 0 € | 500 000 € | 1 000 |
| Durée | 10 ans | 25 ans | 5 |
| Taux crédit | 0,5 % | 7,0 % | 0,05 |
| Taux assurance | 0,1 % | 1,0 % | 0,01 |

## Design system

Couleurs de marque (CSS variables dans `globals.css`) :

| Token | Valeur | Usage |
|---|---|---|
| `brand-500` | `#003d2b` | Couleur principale (foncé) |
| `brand-400` | `#268e6b` | Secondaire |
| `brand-200` | `#80c0aa` | Accent clair |

Classes utilitaires custom :
- `.glass` - backdrop blur léger, fond transparent
- `.glass-strong` - blur fort avec teinte teal (highlights)

## SEO

- Chaque page définit ses `metadata` (title, description) côté serveur
- FAQ : JSON-LD schema via `FAQSchema.tsx` pour rich snippets Google
- Pages guides : contenu éditorial long-format pour SEO organique
- `data/faq.ts` structure : `{ id, category, question, answer, keywords }`

## Conventions de code

- Alias d'import : `@/*` → `src/*`
- TypeScript strict : nulls explicites, pas de `any`
- Pas de commentaires sur le "quoi" - seulement sur le "pourquoi" si non-évident
- Composants React : fichiers `.tsx`, logique dans `Engine.tsx`, UI dans les sous-composants
- Pas de state management externe (pas de Zustand, Redux, etc.)
