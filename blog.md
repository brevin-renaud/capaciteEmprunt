# Guide de rédaction d'articles — CapaciteEmprunt

## Contexte du projet

**CapaciteEmprunt** est un simulateur premium de capacité d'emprunt immobilier français, disponible sur `capaciteemprunt.fr`. L'outil permet à tout particulier de calculer combien il peut emprunter à la banque pour acheter un bien immobilier, en fonction de son salaire, de son apport, du taux d'intérêt et de la durée souhaitée.

Le simulateur propose deux modes :
- **Mode capacité** : l'utilisateur entre son salaire net et obtient sa capacité maximale d'emprunt
- **Mode optimisation** : l'utilisateur entre un montant cible et voit si c'est faisable, avec des scénarios sur 15, 20 et 25 ans

L'application respecte la règle HCSF (taux d'endettement max 35 % du salaire net), calcule les frais de notaire (2,5 % pour le neuf, 7,5 % pour l'ancien), et intègre l'assurance emprunteur. Tout le calcul est instantané et partageable via URL.

**Public cible :** Français entre 25 et 50 ans, primo-accédants ou investisseurs, salariés ou indépendants, qui cherchent à comprendre leur capacité de financement avant de s'engager avec une banque ou un courtier.

**Ton éditorial :** Pédagogique, factuel, rassurant. Pas de jargon bancaire inutile. Expliquer comme à un ami qui ne s'y connaît pas, mais sans condescendance. Valoriser l'autonomie du lecteur.

---

## Stratégie SEO

### Positionnement éditorial

Les articles doivent répondre à des **intentions de recherche informationnelles** (comprendre, apprendre) et **transactionnelles** (calculer, simuler, agir). Chaque article doit conclure par une invitation naturelle à utiliser le simulateur.

Le blog se positionne sur les requêtes longue traîne liées à l'immobilier, au crédit et à la fiscalité immobilière française. L'objectif est de ranker sur Google.fr pour des requêtes que les futurs acheteurs tapent **avant** de contacter leur banque.

### Mots-clés principaux (head keywords)

- capacité d'emprunt
- simulateur crédit immobilier
- calcul prêt immobilier
- taux immobilier 2026
- prêt à taux zéro 2026

### Mots-clés secondaires et longue traîne

- comment calculer sa capacité d'emprunt
- capacité d'emprunt avec un salaire de [X]€
- taux d'endettement immobilier 35%
- règle HCSF 2026
- frais de notaire achat immobilier
- frais de notaire neuf vs ancien
- apport immobilier minimum
- simulation crédit immobilier 20 ans
- mensualité crédit immobilier [montant]€
- prêt immobilier sans apport 2026
- PTZ 2026 conditions
- primo-accédant aide immobilier
- investissement locatif calcul rentabilité
- rachat de crédit immobilier
- assurance emprunteur taux
- taux crédit immobilier [banque]
- emprunter seul vs à deux
- capacité d'emprunt couple
- salaire minimum pour emprunter 200 000€

### Sémantique à intégrer dans les articles

Certains termes doivent apparaître naturellement dans les articles pour renforcer la cohérence sémantique du domaine :

> mensualité, capital emprunté, taux annuel effectif global (TAEG), durée de remboursement, amortissement, apport personnel, frais d'agence, bien neuf, bien ancien, quotient familial, revenu net imposable, PTZ, HCSF, Banque de France, courtier, notaire, compromis de vente, acte authentique, mainlevée, assurance décès invalidité (ADI), garantie hypothécaire, caution bancaire

---

## Sujets à couvrir (liste indicative, non exhaustive)

Chaque sujet doit être traité avec un angle original, une information actionnelle et une conclusion qui pousse à simuler.

### Catégorie : Comprendre le crédit immobilier

- Comment fonctionne le calcul de capacité d'emprunt en France
- Qu'est-ce que le taux d'endettement et pourquoi la banque plafonne à 35 %
- La règle HCSF expliquée simplement : ce que ça change pour votre dossier
- La différence entre TAEG, taux nominatif et taux d'assurance
- Mensualité fixe ou variable : laquelle choisir et pourquoi
- Amortissement du capital : pourquoi vous remboursez d'abord les intérêts
- L'assurance emprunteur : combien ça coûte vraiment sur 20 ans

### Catégorie : Préparer son projet immobilier

- Combien faut-il gagner pour emprunter 200 000 € ?
- Emprunter seul ou à deux : ce que ça change pour la banque
- L'apport immobilier : combien faut-il vraiment mettre ?
- Prêt immobilier sans apport : mythe ou réalité en 2026 ?
- Frais de notaire : combien prévoir pour un achat dans l'ancien vs le neuf
- Les 6 documents que la banque va vous demander pour votre prêt
- Courtier ou banque directement : qui vous offre le meilleur taux ?

### Catégorie : Aides et dispositifs

- PTZ 2026 : conditions, montants, et comment en bénéficier
- Les aides pour les primo-accédants en 2026 (PTZ, Action Logement, APL accession)
- Investissement locatif : comment calculer sa capacité d'emprunt différemment
- Prêt Action Logement : qui peut y prétendre et comment l'obtenir

### Catégorie : Optimisation et stratégie

- 15, 20 ou 25 ans : quelle durée choisir pour votre prêt immobilier ?
- Renégocier son crédit immobilier : dans quels cas c'est rentable ?
- Rachat de crédit : économies réelles vs frais cachés
- Augmenter sa capacité d'emprunt : les 5 leviers concrets
- L'impact des taux d'intérêt sur votre budget immobilier
- Taux immobilier 2026 : où en est-on et que prévoir pour la suite ?

### Catégorie : Situations spécifiques

- Indépendant / freelance : comment la banque calcule votre capacité ?
- CDI vs CDD : les critères bancaires pour obtenir un prêt
- Capacité d'emprunt après 50 ans : ce que ça change
- Acheter après un divorce : comment recalculer son dossier
- Primo-accédant : erreurs à éviter lors de sa première simulation

---

## Instructions de rédaction pour l'IA

### Format de chaque article

Chaque fichier doit être sauvegardé dans le dossier `drafts/` à la racine du projet, avec l'extension `.md`.

**Nom de fichier conseillé :** `NN-slug-de-l-article.md` (ex : `12-assurance-emprunteur-cout-reel.md`)

Le fichier doit obligatoirement commencer par un bloc frontmatter YAML entre deux lignes `---` :

```
---
slug: assurance-emprunteur-cout-reel-20-ans     ← obligatoire · minuscules, chiffres, tirets uniquement
title: L'assurance emprunteur : combien ça coûte vraiment sur 20 ans   ← obligatoire · 50-65 caractères
description: Taux, capital initial ou restant dû, délégation…           ← obligatoire · 140-155 caractères
category: Immobilier                            ← optionnel · défaut : Immobilier
author: CapaciteEmprunt                         ← optionnel · défaut : CapaciteEmprunt
---

Contenu markdown ici (sans H1 — le titre est géré par le site)
```

> **Règles sur le slug :** uniquement des lettres minuscules sans accent, des chiffres et des tirets (`-`). Pas d'espaces, pas de majuscules, pas de caractères spéciaux. Le slug doit être unique sur le blog.

Le contenu doit être rédigé en Markdown standard (pas besoin de composants React).

### Contraintes de rédaction

- **Longueur :** 700 à 1 200 mots (lecture de 3 à 6 minutes)
- **Pas de sommaire** — le texte se lit comme un article de presse ou de magazine
- **Pas de liste à puces** sauf si indispensable (max 1 liste par article)
- **Pas de tableau** dans le corps de l'article
- **Paragraphes courts** : 2 à 4 phrases maximum par paragraphe
- **Titres de section** (H2 et H3) clairs, orientés question ou bénéfice utilisateur
- **Mot-clé principal** : présent dans le titre, dans le premier paragraphe, dans un H2
- **Mot-clé secondaire** : présent au moins 2 fois dans le corps
- **Pas de jargon** non expliqué. Tout terme technique doit être défini à sa première apparition
- **Chiffres actualisés** : barèmes 2026, taux en vigueur, plafonds HCSF actuels
- **Une phrase d'accroche forte** en ouverture — fait surprenant, chiffre inattendu ou question que le lecteur se pose
- **Conclusion** : synthèse en 2 à 3 phrases + appel à l'action vers le simulateur (naturel, pas commercial)

### Ton et style

- Première personne du pluriel ("vous") — s'adresser directement au lecteur
- Actif plutôt que passif
- Phrases courtes et directes
- Exemples concrets avec des chiffres réalistes (ex : "pour un salaire de 3 500 € net…")
- Pas d'emojis, pas de points d'exclamation en série
- Pas de formules génériques type "dans cet article, nous allons…"

### Valeur ajoutée obligatoire

Chaque article doit apporter **au moins une information que l'on ne trouve pas facilement ailleurs** :
- Un calcul illustré pas à pas
- Un cas pratique chiffré
- Une règle méconnue (ex : le plafond HCSF peut être dépassé dans 20 % des dossiers selon les banques)
- Une comparaison concrète (ex : impact de 0,5 % de taux supplémentaire sur 20 ans)
- Un conseil d'ordre pratique que seul un professionnel ou un lecteur averti connaît

### Exemple de structure type

```md
---
slug: combien-faut-il-gagner-pour-emprunter-200000-euros
title: Combien faut-il gagner pour emprunter 200 000 € ?
description: Salaire minimum, apport, taux d'endettement : on vous explique exactement ce que la banque regarde pour un emprunt de 200 000 €.
---

Beaucoup d'emprunteurs arrivent en banque avec un chiffre en tête…

## Ce que la banque regarde en premier

…

## Le calcul concret pour 200 000 €

…
```

> Pas de H1 dans le contenu (le titre est affiché automatiquement par le site). Pas de sommaire.

---

## Ce qu'il ne faut PAS faire

- Ne pas écrire de disclaimers juridiques interminables (une phrase suffit si nécessaire)
- Ne pas lister toutes les banques françaises — rester générique ou citer uniquement à titre d'exemple
- Ne pas promettre des taux précis (les taux bougent — parler de fourchettes ou de références au moment de la rédaction)
- Ne pas copier des articles existants — l'originalité est une exigence SEO et éditoriale
- Ne pas rédiger un article "fourre-tout" — un sujet précis = un article précis
- Ne pas utiliser le mot "article" dans l'article lui-même
- Ne pas commencer par "Dans cet article" ou "Nous allons voir"

---

## Domaine et URL

- Domaine : `capaciteemprunt.fr`
- URL des articles : `capaciteemprunt.fr/blog/[slug]`
- Langue : français exclusivement
- Public : France métropolitaine (réglementation française, barèmes France)
