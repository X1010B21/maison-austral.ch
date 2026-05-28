export const CONTACT_EMAIL = 'contact@maison-austral.ch';

export const NAV_LINKS = [
  { label: 'Accueil', href: '/#top' },
  { label: 'Approche', href: '/#approche' },
  { label: 'À propos', href: '/#a-propos' },
] as const;

export const DESTINATIONS = {
  espagne: [
    { name: 'Oliva', region: 'Valence' },
    { name: 'Costa Blanca Nord', region: 'Alicante' },
    { name: 'Galicia', region: 'Nord-Ouest' },
  ],
  portugal: [
    { name: 'Lisbonne', region: 'Capitale' },
    { name: 'Porto', region: 'Nord' },
    { name: 'Algarve', region: 'Sud' },
    { name: 'Comporta', region: 'Alentejo' },
    { name: 'Alcácer do Sal', region: 'Alentejo' },
    { name: 'Santa Cruz', region: 'Estoril' },
    { name: 'Douro Valley', region: 'Vignobles' },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    q: 'Quels pays couvrez-vous ?',
    a: "Nous accompagnons les expatriations depuis la Suisse vers l'Espagne et le Portugal, et inversement. Nos zones de prédilection couvrent la péninsule ibérique dans son ensemble, des côtes méditerranéennes aux régions intérieures.",
  },
  {
    q: "Sous quel délai obtient-on une première réponse ?",
    a: "Toute demande est prise en charge sous 4 heures ouvrées, avec une première réponse personnalisée sous 24 heures. Aucun standard automatisé : un interlocuteur unique vous répond directement.",
  },
  {
    q: "Que comprend la prestation « clé en main » ?",
    a: "La recherche du logement, la vente de votre bien actuel si nécessaire, le notariat, le courtage, le financement, le déménagement et l'installation sur place. Nous couvrons l'intégralité du projet.",
  },
  {
    q: "Travaillez-vous aussi pour des résidences secondaires ?",
    a: "Oui. Nous accompagnons à l'identique l'achat ou la location longue durée d'une maison de vacances sur la péninsule ibérique.",
  },
  {
    q: "Proposez-vous des projets de rénovation ?",
    a: "Oui, en Suisse comme à l'étranger. Maison, appartement, rénovation lourde ou rafraîchissement : nous orchestrons les corps de métier pour vous.",
  },
  {
    q: "Quels sont vos honoraires ?",
    a: "Nos honoraires dépendent de la nature et de l'ampleur du projet. Nous établissons un devis transparent dès le premier échange, sans engagement.",
  },
] as const;
