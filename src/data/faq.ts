export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
}

export const FAQ_CATEGORIES = [
  { id: "calcul", label: "Calcul & Formule" },
  { id: "regles", label: "Règles & Normes" },
  { id: "apport", label: "Apport & Financement" },
  { id: "credits", label: "Crédits en cours" },
  { id: "duree-taux", label: "Durée & Taux" },
  { id: "profils", label: "Profils spécifiques" },
  { id: "optimisation", label: "Optimisation" },
  { id: "simulateur", label: "Notre simulateur" },
] as const;

export type FAQCategory = (typeof FAQ_CATEGORIES)[number]["id"];

export const FAQ_ITEMS: FAQItem[] = [
  // ── CALCUL & FORMULE ───────────────────────────────────────────
  {
    id: "calcul-capacite-emprunt",
    category: "calcul",
    question: "Comment est calculée ma capacité d'emprunt ?",
    answer:
      "Votre capacité d'emprunt repose sur la formule d'annuité : P = M × [1 − (1+r)^(−n)] / r, où M est votre mensualité maximale (revenus nets × 35 %), r le taux mensuel (taux annuel ÷ 12 ÷ 100) et n le nombre de mensualités. Concrètement, avec 3 500 € de revenus nets, votre mensualité plafond est de 1 225 € (35 %). Sur 20 ans à 3,5 %, cela ouvre un capital empruntable d'environ 213 000 €. L'apport personnel vient s'y ajouter après déduction des frais de notaire pour former votre budget total d'acquisition.",
    keywords: ["formule calcul capacité", "revenus nets", "taux d'effort"],
  },
  {
    id: "emprunter-2000-euros",
    category: "calcul",
    question: "Combien puis-je emprunter avec 2 000 € de salaire net ?",
    answer:
      "Avec 2 000 € de revenus nets mensuels, votre mensualité maximale HCSF est de 700 € (35 %). À 3,5 % sur 20 ans, vous pouvez emprunter environ 122 000 €. Sur 25 ans, cette capacité monte à environ 137 000 €. En ajoutant un apport de 20 000 € (déduction faite des frais de notaire d'environ 8 000 € dans l'ancien), votre budget total d'acquisition atteint environ 134 000 € sur 20 ans. Ces chiffres varient selon le taux d'intérêt et le taux d'assurance retenus - utilisez notre simulateur pour une estimation personnalisée.",
    keywords: ["capacité emprunt 2000 euros", "emprunter salaire 2000", "simulation crédit 2000 euros"],
  },
  {
    id: "emprunter-3000-euros",
    category: "calcul",
    question: "Combien puis-je emprunter avec 3 000 € de salaire net ?",
    answer:
      "Avec 3 000 € de revenus nets, la règle HCSF fixe votre mensualité plafond à 1 050 €. À 3,5 % sur 20 ans, vous pouvez emprunter environ 183 000 €. Sur 25 ans : environ 205 000 €. Avec 30 000 € d'apport (déduction des frais de notaire), votre budget total d'acquisition avoisine 205 000 € sur 20 ans. Les fonctionnaires, les profils en CDI confirmé et ceux ayant un faible reste à vivre peuvent espérer des conditions légèrement meilleures. Simulez votre situation exacte en ajustant taux et durée dans notre outil.",
    keywords: ["capacité emprunt 3000 euros", "combien emprunter salaire 3000", "crédit immobilier 3000 net"],
  },
  {
    id: "emprunter-4000-euros",
    category: "calcul",
    question: "Combien puis-je emprunter avec 4 000 € de salaire net ?",
    answer:
      "Avec 4 000 € nets par mois, votre mensualité maximale est de 1 400 € (35 %). À 3,5 % sur 20 ans, la capacité d'emprunt s'établit à environ 244 000 €. Sur 25 ans, elle atteint environ 274 000 €. Avec un apport de 40 000 € couvrant frais de notaire (~15 000 € dans l'ancien) et laissant 25 000 € en apport net, votre budget total avoisine 269 000 € sur 20 ans. À ce niveau de revenus, vous avez accès aux meilleures conditions bancaires si votre profil est stable (CDI, épargne résiduelle). Ajustez les paramètres dans le simulateur pour votre situation réelle.",
    keywords: ["capacité emprunt 4000 euros", "combien emprunter salaire 4000", "simulation prêt 4000 net"],
  },
  {
    id: "formule-annuite-banque",
    category: "calcul",
    question: "Quelle formule les banques utilisent-elles pour calculer le crédit immobilier ?",
    answer:
      "Les banques françaises utilisent la formule d'annuité constante pour calculer la mensualité d'un prêt à taux fixe : M = P × r / [1 − (1+r)^(−n)], où P est le capital emprunté, r le taux mensuel et n le nombre de mensualités. Notre simulateur utilise la formule inverse pour déduire le capital maximum empruntable à partir de la mensualité plafond (revenus × 35 %). En cas de taux zéro (r = 0), la formule se simplifie à P = M × n. L'assurance emprunteur est calculée séparément sur le capital initial et s'ajoute à la charge mensuelle pour le calcul du TAEG.",
    keywords: ["formule annuité crédit immobilier", "calcul mensualité banque", "formule prêt immobilier"],
  },

  // ── RÈGLES & NORMES ────────────────────────────────────────────
  {
    id: "regle-35-pourcent",
    category: "regles",
    question: "Pourquoi la règle des 35 % d'endettement est-elle stricte ?",
    answer:
      "La règle des 35 % est une norme édictée par le HCSF (Haut Conseil de Stabilité Financière) en janvier 2021, rendue juridiquement contraignante depuis le 1er janvier 2022. Elle plafonne le total de vos remboursements mensuels (crédit immo + tous crédits en cours) à 35 % de vos revenus nets, assurance comprise. L'objectif est double : protéger les ménages d'un sur-endettement en cas de hausse des taux ou de perte de revenus, et garantir la stabilité du système bancaire français. Les banques peuvent déroger à cette règle pour maximum 20 % de leur production trimestrielle de crédit, essentiellement pour les primo-accédants et les résidences principales.",
    keywords: ["HCSF", "normes bancaires", "sécurité financière"],
  },
  {
    id: "hcsf-derogations",
    category: "regles",
    question: "Existe-t-il des dérogations à la limite d'endettement de 35 % ?",
    answer:
      "Oui. Le HCSF autorise les banques à déroger à la règle des 35 % pour 20 % maximum de leur production trimestrielle de crédits immobiliers. Ces dérogations sont prioritairement accordées aux primo-accédants achetant leur résidence principale et aux ménages dont le reste à vivre après remboursement est confortablement élevé (revenus > 5 000 €/mois par exemple). En pratique, chaque banque gère son quota de dérogations de façon discrétionnaire. Un courtier immobilier peut identifier les établissements ayant encore du quota disponible dans votre profil.",
    keywords: ["dérogation HCSF", "taux endettement supérieur 35%", "exception règle endettement"],
  },
  {
    id: "hcsf-definition",
    category: "regles",
    question: "Qu'est-ce que le HCSF et quel est son rôle dans le crédit immobilier ?",
    answer:
      "Le Haut Conseil de Stabilité Financière (HCSF) est l'autorité macroprudentielle française présidée par le ministre de l'Économie. Créé en 2013, il surveille le risque systémique dans le secteur financier. Depuis 2020, il encadre les conditions d'octroi des crédits immobiliers aux particuliers via des recommandations devenues contraignantes en 2022 : taux d'endettement ≤ 35 % (assurance incluse) et durée maximale de 25 ans (27 ans en VEFA ou travaux). Ces règles remplacent l'ancienne pratique du « tiers » (33 %) et donnent un cadre uniforme à toutes les banques françaises.",
    keywords: ["HCSF définition", "Haut Conseil Stabilité Financière", "règles octroi crédit immobilier"],
  },

  // ── APPORT & FINANCEMENT ───────────────────────────────────────
  {
    id: "emprunter-sans-apport-2026",
    category: "apport",
    question: "Puis-je emprunter sans apport en 2026 ?",
    answer:
      "Emprunter sans apport reste possible en 2026, mais c'est l'exception. On parle de « prêt à 110 % » car la banque finance le prix du bien (100 %) plus les frais de notaire (~7-8 % dans l'ancien, ~2-3 % dans le neuf). Les profils acceptés sont généralement des primo-accédants jeunes avec un CDI récent, un fort potentiel de revenus futurs, ou des fonctionnaires. En pratique, disposer d'au moins 10 % du prix en apport (pour couvrir les frais de notaire) rassure les banques et améliore significativement les conditions de prêt. L'apport personnel réduit le risque perçu et démontre votre capacité à épargner.",
    keywords: ["prêt à 110%", "apport personnel", "frais de notaire"],
  },
  {
    id: "apport-minimum-achat",
    category: "apport",
    question: "Quel apport minimum faut-il prévoir pour acheter un bien immobilier ?",
    answer:
      "La règle empirique recommande un apport couvrant au minimum les frais annexes (notaire, garantie, frais de dossier), soit 10 % du prix dans l'ancien et 5 % dans le neuf. Un apport de 20 % est idéal : il rassure les banques, permet d'obtenir de meilleures conditions et laisse une marge de sécurité. En deçà de 10 %, les banques appliquent souvent une surprime de taux. Au-delà de 30 %, l'effet de levier devient moins intéressant : mieux vaut parfois conserver de la liquidité pour d'éventuels travaux. Dans notre simulateur, l'apport est déduit des frais de notaire avant d'être ajouté au capital empruntable.",
    keywords: ["apport minimum immobilier", "apport nécessaire crédit", "combien apport achat immobilier"],
  },
  {
    id: "frais-notaire-credit",
    category: "apport",
    question: "Les frais de notaire sont-ils inclus dans le crédit immobilier ?",
    answer:
      "En général, non. La grande majorité des banques refusent de financer les frais de notaire dans le prêt immobilier principal - ils doivent être couverts par l'apport personnel. C'est pourquoi on dit qu'il faut au minimum des économies équivalentes aux frais de notaire pour emprunter. Quelques établissements proposent un « prêt à 110 % » qui les intègre, mais ce produit devient rare et ses conditions (taux, durée) sont moins avantageuses. Dans notre simulateur, nous déduisons automatiquement les frais de notaire de l'apport (7,5 % dans l'ancien, 2,5 % dans le neuf) pour calculer l'apport net réellement utilisable.",
    keywords: ["frais notaire crédit immobilier", "financer frais notaire", "apport frais de notaire"],
  },

  // ── CRÉDITS EN COURS ───────────────────────────────────────────
  {
    id: "impact-credit-conso",
    category: "credits",
    question: "Quel est l'impact d'un crédit conso sur mon prêt immobilier ?",
    answer:
      "Un crédit à la consommation en cours réduit directement votre capacité d'emprunt immobilier car sa mensualité s'ajoute à votre taux d'endettement global. Avec 3 500 € de revenus nets, votre plafond de 35 % donne 1 225 € de mensualités totales. Si vous remboursez déjà 200 € de crédit auto, il ne reste que 1 025 € pour votre prêt immobilier - soit une capacité réduite d'environ 35 000 € sur 20 ans. La stratégie la plus efficace est de solder les petits crédits avant de déposer votre dossier, même si cela consomme une partie de l'apport.",
    keywords: ["capacité de remboursement", "cumul de crédits", "crédit conso prêt immobilier"],
  },
  {
    id: "credit-auto-achat-immo",
    category: "credits",
    question: "Puis-je obtenir un prêt immobilier avec un crédit auto en cours ?",
    answer:
      "Oui, c'est possible si votre taux d'endettement global (crédit auto + futur prêt immobilier + assurances) reste sous les 35 %. Exemple : avec 3 000 € de revenus et 200 € de mensualité auto, votre capacité de remboursement résiduelle pour l'immo est de 850 € (1 050 € − 200 €). Sur 20 ans à 3,5 %, cela représente environ 148 000 € empruntables au lieu de 183 000 € sans le crédit auto - soit une perte de capacité de 35 000 €. Si le crédit auto se termine dans moins de 12 mois, certaines banques acceptent de ne pas le comptabiliser.",
    keywords: ["crédit auto prêt immobilier", "achat maison crédit voiture", "endettement crédit conso immobilier"],
  },
  {
    id: "calcul-taux-endettement-multi-credits",
    category: "credits",
    question: "Comment calculer mon taux d'endettement avec plusieurs crédits en cours ?",
    answer:
      "Le taux d'endettement global se calcule ainsi : (somme de toutes vos mensualités de crédits en cours + mensualité du futur crédit immobilier, assurance comprise) ÷ revenus nets × 100. Exemple : vous gagnez 4 000 €, vous avez 150 € de crédit auto et 80 € de crédit conso. Si votre futur prêt immo génère une mensualité de 1 200 €, votre taux est : (150 + 80 + 1 200) / 4 000 = 36 % - au-dessus du plafond HCSF. Il faudrait soit solder un crédit, soit réduire la mensualité immo (durée plus longue, capital moindre) pour rentrer dans les clous.",
    keywords: ["calcul taux endettement", "taux endettement multi-crédits", "comment calculer endettement"],
  },

  // ── DURÉE & TAUX ───────────────────────────────────────────────
  {
    id: "meilleure-duree-emprunt",
    category: "duree-taux",
    question: "Quelle est la meilleure durée pour un prêt immobilier ?",
    answer:
      "Il n'existe pas de durée idéale universelle : c'est un arbitrage entre mensualité et coût total. Une durée longue (25 ans) réduit la mensualité et augmente la capacité d'emprunt, mais multiplie les intérêts payés. Une durée courte (15 ans) coûte moins cher au total mais exige une mensualité plus élevée. En 2026, avec des taux autour de 3,5 %, emprunter sur 25 ans plutôt que 20 ans augmente la capacité de 10-12 %, mais peut doubler les intérêts totaux. Notre simulateur compare simultanément 15, 20 et 25 ans pour vous aider à trouver le meilleur équilibre.",
    keywords: ["durée prêt immobilier", "coût total crédit", "mensualité durée"],
  },
  {
    id: "taux-assurance-emprunteur",
    category: "duree-taux",
    question: "Comment le taux d'assurance emprunteur affecte-t-il mon crédit ?",
    answer:
      "L'assurance emprunteur est obligatoire pour tout crédit immobilier. Son taux, exprimé annuellement sur le capital emprunté, s'ajoute au taux d'intérêt pour former le TAEG. Sur un emprunt de 200 000 € sur 20 ans, un écart de 0,2 % sur l'assurance représente environ 8 000 € de différence. Depuis la loi Lemoine (2022), vous pouvez changer d'assurance à tout moment sans frais. Les taux varient de 0,10 % à 0,50 % selon votre âge, état de santé et garanties. Notre simulateur inclut ce paramètre pour une projection réaliste.",
    keywords: ["assurance emprunteur", "TAEG", "loi Lemoine"],
  },
  {
    id: "taux-nominal-vs-taeg",
    category: "duree-taux",
    question: "Quelle est la différence entre le taux nominal et le TAEG ?",
    answer:
      "Le taux nominal (ou taux d'intérêt) est le coût pur du capital prêté, exprimé en pourcentage annuel. Le TAEG (Taux Annuel Effectif Global) inclut en plus tous les frais obligatoires : assurance emprunteur, frais de dossier, frais de garantie (hypothèque ou caution). Le TAEG est le seul indicateur qui permet de comparer objectivement deux offres de crédit. Il doit obligatoirement figurer sur toute offre de prêt. Un taux nominal de 3,5 % peut donner un TAEG de 4,1 % une fois l'assurance et les frais intégrés. Notre simulateur affiche le coût total intérêts + assurance pour une transparence maximale.",
    keywords: ["taux nominal TAEG différence", "TAEG crédit immobilier", "taux effectif global"],
  },
  {
    id: "taux-immobilier-2026",
    category: "duree-taux",
    question: "Quel est le taux moyen d'un prêt immobilier en 2026 ?",
    answer:
      "En 2026, après le cycle de baisse amorcé mi-2024, les taux moyens se situent entre 3,0 % et 3,8 % selon la durée et le profil emprunteur. Sur 15 ans : 3,0-3,3 %. Sur 20 ans : 3,3-3,6 %. Sur 25 ans : 3,5-3,8 %. Les meilleurs profils (CDI, fort apport, épargne résiduelle) obtiennent les taux les plus bas. Les taux varient aussi selon les banques : passer par un courtier peut faire gagner 0,2 à 0,5 point. Notre simulateur propose 3,5 % par défaut - ajustez selon votre situation réelle pour une estimation précise.",
    keywords: ["taux immobilier 2026", "taux crédit immobilier actuel", "meilleur taux prêt immobilier"],
  },

  // ── PROFILS SPÉCIFIQUES ────────────────────────────────────────
  {
    id: "emprunt-cdd-auto-entrepreneur",
    category: "profils",
    question: "Comment emprunter quand on est en CDD ou auto-entrepreneur ?",
    answer:
      "Les banques sont plus prudentes avec les revenus non-permanents, mais ce n'est pas impossible. En CDD, certaines banques acceptent si le contrat est long (12+ mois restants), dans le secteur public ou para-public. En auto-entrepreneur ou indépendant, la banque demandera 2 à 3 bilans comptables complets et calculera les revenus sur la moyenne des dernières années. Si les revenus sont instables, une co-emprunt avec un CDI peut suffire. Le PTZ reste accessible sous conditions de ressources. Renforcer l'apport (20-30 %) et présenter une épargne résiduelle solide améliore significativement les chances d'accord.",
    keywords: ["crédit immobilier CDD", "prêt immobilier auto-entrepreneur", "emprunt sans CDI"],
  },
  {
    id: "emprunt-couple",
    category: "profils",
    question: "Comment calculer la capacité d'emprunt d'un couple ?",
    answer:
      "Pour un couple co-emprunteur, les revenus nets des deux personnes sont additionnés pour calculer la mensualité maximale (somme × 35 %). Exemple : lui gagne 2 500 €, elle gagne 2 000 € → mensualité max = 4 500 € × 35 % = 1 575 €. Sur 20 ans à 3,5 %, cela donne une capacité d'emprunt d'environ 274 000 €. L'avantage du co-emprunt est double : revenus cumulés et risque partagé (l'assurance couvre les deux). En cas de revenus très déséquilibrés, la banque peut pondérer selon la part de chaque emprunteur dans le remboursement.",
    keywords: ["capacité emprunt couple", "co-emprunteur crédit immobilier", "revenus cumulés emprunt"],
  },
  {
    id: "revenus-locatifs-capacite",
    category: "profils",
    question: "Comment les revenus locatifs sont-ils pris en compte par les banques ?",
    answer:
      "Les banques intègrent généralement 70 % des loyers perçus (ou espérés, sur justificatif) dans les revenus retenus pour le calcul. Le coefficient de 70 % compense les risques de vacance locative, de charges et d'imposition. Avec 1 000 € de loyers, 700 € seront ajoutés à vos revenus de référence. Attention : pour un achat locatif avec méthode différentielle, la banque peut soustraire 70 % des loyers de la mensualité du nouveau crédit avant de calculer le taux d'endettement - ce qui augmente considérablement la capacité d'emprunt.",
    keywords: ["revenus locatifs capacité emprunt", "loyers calcul crédit", "revenus fonciers banque"],
  },

  // ── OPTIMISATION ───────────────────────────────────────────────
  {
    id: "augmenter-capacite-emprunt",
    category: "optimisation",
    question: "Comment augmenter sa capacité d'emprunt immobilier ?",
    answer:
      "Plusieurs leviers permettent d'augmenter votre capacité d'emprunt : (1) Solder les crédits à la consommation avant le dépôt de dossier - chaque mensualité supprimée libère de l'espace dans les 35 %. (2) Allonger la durée du prêt (passer de 20 à 25 ans augmente la capacité de ~10-12 %). (3) Négocier un taux d'intérêt plus bas via un courtier. (4) Emprunter avec un co-emprunteur pour cumuler les revenus. (5) Attendre une augmentation de salaire ou un 13e mois. (6) Faire appel au PTZ si vous êtes primo-accédant. (7) Optimiser l'assurance emprunteur (délégation d'assurance loi Lemoine).",
    keywords: ["augmenter capacité emprunt", "maximiser prêt immobilier", "améliorer dossier crédit"],
  },
  {
    id: "solder-credits-avant-achat",
    category: "optimisation",
    question: "Vaut-il mieux solder ses crédits en cours avant d'acheter ?",
    answer:
      "Dans la plupart des cas, oui - surtout si les crédits sont petits (< 5 000 € restants) et leurs mensualités élevées. Rembourser 100 € de mensualité supprime l'équivalent de ~18 000 € de dette immobilière sur 20 ans (à 3,5 %). La règle est : solder si le gain en capacité d'emprunt dépasse le coût de l'apport utilisé. Exception : si le taux de votre crédit conso est très bas (< 1 %) et que votre apport rapporte davantage placé ailleurs, il peut être judicieux de le garder. Consultez un courtier pour simuler les deux scénarios.",
    keywords: ["solder crédits avant achat immobilier", "remboursement anticipé crédit conso", "stratégie endettement immobilier"],
  },
  {
    id: "negocier-taux-banque",
    category: "optimisation",
    question: "Comment négocier le meilleur taux pour son crédit immobilier ?",
    answer:
      "Le taux dépend de votre profil, du marché et de la banque. Pour obtenir le meilleur taux : (1) Soignez votre dossier - 3 derniers bulletins de salaire, pas de découvert, épargne résiduelle. (2) Consultez plusieurs banques en parallèle - un écart de 0,3 % sur 200 000 € sur 20 ans représente ~12 000 €. (3) Passez par un courtier - il accède à des taux négociés inaccessibles en direct. (4) Maximisez l'apport - plus il est élevé, moins la banque prend de risque. (5) Montrez une épargne résiduelle après apport - signe de gestion saine. (6) Domiciliez vos revenus dans la banque prêteuse si elle l'exige.",
    keywords: ["négocier taux crédit immobilier", "meilleur taux banque", "courtier immobilier taux"],
  },

  // ── NOTRE SIMULATEUR ───────────────────────────────────────────
  {
    id: "utiliser-simulateur",
    category: "simulateur",
    question: "Comment utiliser le simulateur de capacité d'emprunt ?",
    answer:
      "Notre simulateur est entièrement gratuit et fonctionne en temps réel. Saisissez vos revenus nets mensuels, votre apport personnel, la durée souhaitée, le taux d'intérêt et le taux d'assurance. Le résultat se met à jour instantanément sans bouton « Calculer ». Vous obtenez : la mensualité maximale HCSF, le capital empruntable, le budget total d'acquisition, le coût total des intérêts et de l'assurance, et un comparatif 15/20/25 ans. L'URL se met à jour automatiquement - copiez-la pour partager ou sauvegarder votre simulation.",
    keywords: ["utiliser simulateur capacité emprunt", "comment calculer capacité emprunt en ligne", "outil simulation crédit immobilier gratuit"],
  },
  {
    id: "url-partageable-simulateur",
    category: "simulateur",
    question: "L'URL partageable du simulateur contient-elle mes données personnelles ?",
    answer:
      "L'URL partageable encode vos paramètres de simulation (revenus, apport, durée, taux) mais ne contient aucune donnée personnelle identifiable - ni nom, ni email, ni IBAN. Les valeurs numériques sont compressées en Base36 pour produire une URL courte et opaque. Notre simulateur fonctionne entièrement côté client (aucun serveur ne reçoit vos données) et ne dépose aucun cookie de tracking. Vous pouvez partager le lien en toute sécurité avec un courtier, votre banque ou un proche.",
    keywords: ["sécurité simulateur capacité emprunt", "partager simulation crédit", "données privées simulateur immobilier"],
  },
  {
    id: "difference-simulateur-banque",
    category: "simulateur",
    question: "Les résultats du simulateur correspondent-ils à ce que proposera ma banque ?",
    answer:
      "Notre simulateur utilise la même formule mathématique que les banques françaises (annuité constante) et applique strictement la règle HCSF des 35 %. Les résultats sont donc très proches de ce qu'une banque calculera. Les écarts mineurs peuvent provenir de : (1) frais de dossier et de garantie non intégrés dans notre simulateur, (2) arrondi sur les taux d'assurance, (3) prise en compte d'éléments de revenus supplémentaires (prime annuelle, etc.). Utilisez nos résultats comme référence fiable pour cadrer votre projet, puis affinez avec votre banque ou un courtier pour l'offre définitive.",
    keywords: ["fiabilité simulateur crédit", "écart simulateur banque", "calcul capacité emprunt précis"],
  },
];
