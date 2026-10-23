/* =====================================================================
   📝  LE SEUL FICHIER À MODIFIER POUR METTRE À JOUR TON PORTFOLIO
   ---------------------------------------------------------------------
   - Change un texte  → modifie ce qui est entre guillemets "..."
   - Ajoute un projet → copie un bloc { ... }, colle-le en haut de la
     liste "projets" et change les infos.
   - Supprime un projet → efface son bloc { ... } (et la virgule).
   Les projets s'affichent dans l'ordre de la liste (le 1er = en haut).
   ===================================================================== */

const SITE = {
  // ---------- Identité ----------
  nom: "Golden Cut",
  initiales: "GC",
  slogan: "Chaque coupe vaut de l'or.",
  metier: "Studio de montage vidéo & IA",
  localisation: "Madagascar — clients partout dans le monde",
  disponible: true, // true = badge vert "Disponible", false = "Complet"

  // ---------- Accueil ----------
  // Les mots entre *étoiles* s'affichent en italique doré.
  titre: "On monte des vidéos qui *retiennent* le regard.",
  sousTitre:
    "Montage, shorts viraux et vidéos générées par IA pour créateurs, marques et expéditions. Du dérush brut au rendu final, prêt à publier.",

  // Showreel en fond d'écran (optionnel).
  //  - Fichier MP4 dans le dossier medias/ : "medias/showreel.mp4"
  //  - Laisse "" pour un fond animé à la place.
  showreelFond: "medias/showreel-fond.mp4",
  // Lien du showreel complet (YouTube, Vimeo ou MP4) ouvert par le bouton "Voir le showreel".
  showreel: "medias/tahri-diagnostic.mp4",
  showreelFormat: "vertical", // "horizontal" ou "vertical"

  // ---------- Chiffres clés ----------
  chiffres: [
    { valeur: "120+", label: "Vidéos livrées" },
    { valeur: "5M+", label: "Vues générées" },
    { valeur: "48h", label: "Délai moyen" },
    { valeur: "100%", label: "À distance" },
  ],

  // ---------- Contact ----------
  email: "almainty7@gmail.com",
  whatsapp: "261342779148", // sans + ni espaces
  reseaux: [
    { nom: "Facebook", lien: "https://facebook.com/jonathan.andriambelo" },
    { nom: "GitHub", lien: "https://github.com/JonathanGasy" },
    // { nom: "Instagram", lien: "https://instagram.com/ton-compte" },
    // { nom: "YouTube",   lien: "https://youtube.com/@ta-chaine" },
  ],
};

/* =====================================================================
   🎬  PROJETS
   ---------------------------------------------------------------------
   categorie : "montage" | "shorts" | "ia"
   format    : "horizontal" (16:9) ou "vertical" (9:16)
   video     : lien YouTube, YouTube Shorts, Vimeo ou fichier "medias/xxx.mp4"
   miniature : (optionnel) image "medias/xxx.jpg".
               Pour YouTube elle est trouvée automatiquement.
               Pour Vimeo ou un MP4, ajoute-la toi-même.
   apercu    : (optionnel) petit MP4 muet joué au survol de la carte.
   ===================================================================== */

const PROJETS = [
  {
    titre: "Pub — Le diagnostic toiture",
    client: "Maison Tahri & Fils",
    categorie: "montage",
    format: "vertical",
    annee: "2026",
    description: "Publicité verticale pour des couvreurs : face caméra, motion design, sous-titres animés et habillage de marque.",
    video: "medias/tahri-diagnostic.mp4",
    miniature: "medias/tahri-diagnostic.jpg",
    apercu: "medias/tahri-diagnostic-apercu.mp4",
  },
  {
    titre: "POV : grosse soirée et je suis couvreur",
    client: "Maison Tahri & Fils",
    categorie: "ia",
    format: "vertical",
    annee: "2026",
    description: "Short humoristique généré par IA : scène impossible, timing comique et chute pensée pour le partage.",
    video: "medias/pov-couvreur-ia.mp4",
    miniature: "medias/pov-couvreur-ia.jpg",
    apercu: "medias/pov-couvreur-ia-apercu.mp4",
  },
  {
    titre: "30 ans d'expérience",
    client: "Maison Tahri & Fils",
    categorie: "montage",
    format: "vertical",
    annee: "2026",
    description: "Pub savoir-faire : rythme serré, gros plans du geste, titrage et finition « nickel ».",
    video: "medias/tahri-30-ans.mp4",
    miniature: "medias/tahri-30-ans.jpg",
    apercu: "medias/tahri-30-ans-apercu.mp4",
  },
  {
    titre: "Témoignage cliente",
    client: "Kallycurls",
    categorie: "shorts",
    format: "vertical",
    annee: "2026",
    description: "Témoignage en salon de coiffure : dérush de l'interview, sous-titres mot à mot, montage naturel et authentique.",
    video: "medias/kallycurls-temoignage.mp4",
    miniature: "medias/kallycurls-temoignage.jpg",
    apercu: "medias/kallycurls-temoignage-apercu.mp4",
  },
  {
    titre: "Concentration maximale",
    client: "Maison Tahri & Fils",
    categorie: "shorts",
    format: "vertical",
    annee: "2026",
    description: "Short chantier : réglage millimétré, montage au beat et textes courts pour la rétention.",
    video: "medias/tahri-concentration.mp4",
    miniature: "medias/tahri-concentration.jpg",
    apercu: "medias/tahri-concentration-apercu.mp4",
  },
  {
    titre: "Une application bien faite",
    client: "Maison Tahri & Fils",
    categorie: "shorts",
    format: "vertical",
    annee: "2026",
    description: "Contenu organique Instagram/TikTok : plan POV satisfaisant, rendu 4K, légende native.",
    video: "medias/tahri-application.mp4",
    miniature: "medias/tahri-application.jpg",
    apercu: "medias/tahri-application-apercu.mp4",
  },

  /* MODÈLE À COPIER pour un nouveau projet (supprime la ligne du début et celle de la fin) :
  {
    titre: "Titre du projet",
    client: "Nom du client",
    categorie: "montage",
    format: "horizontal",
    annee: "2026",
    description: "Ce que tu as fait.",
    video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    miniature: "",
    apercu: "",
  },
  */
];

/* =====================================================================
   🛠  SERVICES
   ===================================================================== */
const SERVICES = [
  {
    titre: "Montage vidéo",
    texte: "Vidéos YouTube, films d'expédition, interviews. Dérush, narration, étalonnage, sound design.",
  },
  {
    titre: "Shorts & Reels",
    texte: "On transforme tes vidéos longues en formats verticaux qui accrochent dès la première seconde.",
  },
  {
    titre: "Vidéo IA",
    texte: "Création de vidéos générées par IA : images, animation, voix off et musique, avec une vraie direction artistique.",
  },
];

/* Logiciels / outils affichés dans le bandeau défilant */
const OUTILS = [
  "Premiere Pro", "DaVinci Resolve", "After Effects", "CapCut",
  "Runway", "Kling", "Higgsfield", "Midjourney", "ElevenLabs", "Suno",
];

/* =====================================================================
   👥  ÉQUIPE
   photo : image dans medias/ (format portrait conseillé, ex. 800x1000)
   Ajoute / retire un membre en copiant / supprimant un bloc.
   ===================================================================== */
const EQUIPE = [
  {
    nom: "Jonathan Pierrot",
    role: "Fondateur · Monteur & créateur IA",
    photo: "medias/equipe-jonathan.jpg",
  },
  {
    nom: "Yanns Joan",
    role: "Monteur vidéo · Shorts & Reels",
    photo: "medias/equipe-yanns.jpg",
  },
  {
    nom: "Steph Wei",
    role: "Monteur vidéo · Motion design",
    photo: "medias/equipe-steph.jpg",
  },
];

/* =====================================================================
   💬  TÉMOIGNAGES
   Remplace chaque texte par l'avis RÉEL de ton client (copie-colle
   son message). Laisse la liste vide [] pour masquer la section.
   ===================================================================== */
const TEMOIGNAGES = [
  {
    texte: "t'es chuad 🔥, j'aime bien.",
    nom: "Ossam Nomad",
    role: "Pulsia Extreme Expedition",
  },
  {
    texte: "I took a quick look,I'm happy at first glance.",
    nom: "Nathan Van veen",
    role: "Créateur de contenu",
  },
  {
    texte: "Je te fais confiance .",
    nom: "Kally Kurl",
    role: "Client",
  },
];
