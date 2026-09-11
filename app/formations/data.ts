export type Formation = {
  slug: string;
  title: string;
  label: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  summary: string;
  goals: string[];
  format: string[];
  date:string;
};

export const formations: Formation[] = [
  {
      slug: "kinesiologie",
      title: "Kinésiologie",
      label: "Équilibre émotionnel & corps",
      duration: "3 jours",
      price: "990 DT",
      image: "/kiné.jpg",
      description: "Une approche douce et profonde pour lire le corps, les tensions et les blocages émotionnels afin de retrouver un équilibre durable.",
      summary: "La kinésiologie permet d’identifier les causes profondes de la fatigue, du stress et des tensions grâce à des tests musculaires et des outils de rééquilibrage.",
      goals: [
          "Identifier les blocages physiques et émotionnels",
          "Réduire le stress et la fatigue chronique",
          "Reprendre confiance en soi et en son corps",
          "Acquérir une méthode concrète à intégrer dans votre pratique",
      ],
      format: [
          "Formation pratique et immersive",
          "Support de cours + outils d'application",
          "Certification reconnue",
      ],
      date: ""
  },
  {
      slug: "osteopathie",
      title: "Ostéopathie",
      label: "Soulagement global et durable : specialité femmes enciente",
      duration: "3 jours",
      price: "990 DT",
      image: "/ostéopathie-image.jpg",
      description: "Une approche manuelle globale qui prend en compte les articulations, le système musculo-squelettique et le corps dans son ensemble.",
      summary: "L'ostéopathie aide à soulager les douleurs, améliorer la mobilité et favoriser un meilleur fonctionnement du corps au quotidien.",
      goals: [
          "Anatomie fonctionnelle du bassin féminin",
          "Repérer les zones de tension et de restriction",
          "Développer des gestes doux et efficaces",
          "Créer une approche personnalisée et globale",
      ],
      format: [
          "Approche manuelle structurée",
          "Tutorat praticien et démonstrations",
          "Diplôme/attestation de fin de formation",
      ],
      date: "17-18-19 Septembre 2026"
  },
  {
      slug: "nutrition",
      title: "Nutrition & Detox",
      label: "Mieux manger, mieux vivre",
      duration: "3 jours",
      price: "790 DT",
      image: "/jus%20detox.png",
      description: "Une formation pour apprendre à  l'alimentation et adopter des habitudes simples, durables et adaptées au bien-être.",
      summary: "La nutrition permet d'accompagner les femmes vers un mode de vie plus équilibré, avec des conseils pratiques et personnalisés.",
      goals: [
          "Mieux comprendre les besoins du corps",
          "Adapter l'alimentation à la vitalité",
          "Créer des routines saines et durables",
          "Recttes des jus detox et des repas équilibrés ",
          "Accompagner les personnes vers un mieux-être global",
      ],
      format: [
          "Conseils nutritionnels concrets",
          "Méthode pratique et personnalisée",
          "Atelier de mise en application",
      ],
      date: "21-22-23 Septembre 2026"
  },
  {
      slug: "hijama",
      title: "Hijama",
      label: "Soin ancestral et régénérant",
      duration: "3 jours",
      price: "990 DT",
      image: "/hijama.png",
      description: "Une tradition de soin ancestrale qui vise à relancer la circulation, favoriser les éliminations et rééquilibrer le corps.",
      summary: "Le Hijama est un soin ancestral purifiant qui agit sur la circulation sanguine et énergétique pour retrouver un état de bien-être plus stable.",
      goals: [
          "Découvrir la technique et ses principes",
          "Comprendre le rôle de la circulation et de l'élimination",
          "Développer un soin sécurisé et respectueux",
          "Intégrer une pratique ancestrale dans un cadre moderne",
      ],
      format: [
          "Démonstration pratique",
          "Sécurité et protocole de soin",
          "Support technique et suivi",
      ],
      date: ""
  },
  {
      slug: "reflexologie",
      title: "Réflexologie",
      label: "Restauration de l'équilibre",
      duration: "3 jours",
      price: "790 DT",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=70",
      description: "Une technique manuelle ciblée pour rétablir l'équilibre énergétique du corps et favoriser le bien-être global.",
      summary: "La réflexologie agit sur les zones réflexes du pied pour soulager les tensions, le stress et les déséquilibres corporels.",
      goals: [
          "Comprendre les principes de la réflexologie",
          "Pratiquer des gestes ciblés en sécurité",
          "Apprendre à accompagner le corps vers son équilibre",
          "Créer une activité bien-être solide",
      ],
      format: [
          "Initiation pratique",
          "Workshops et démonstrations",
          "Certification de fin de parcours",
      ],
      date: ""
  },
  {
      slug: "changement-de-perspective",
      title: "Changement de Perspective",
      label: "Confiance · Équilibre · Développement personnel",
      duration: "3 jours",
      price: "550 DT",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=70",
      description: "Une formation phare pour renforcer la confiance en soi, développer la présence et poser des bases solides pour une pratique professionnelle épanouissante.",
      summary: "Ce programme accompagne les participantes vers une meilleure connaissance d'elles-mêmes, une gestion émotionnelle plus sereine et une meilleure confiance dans leur évolution.",
      goals: [
          "Développer sa confiance intérieure",
          "Travailler ses émotions et son énergie",
          "Structurer une vision claire de son projet",
          "Lancer sa pratique avec davantage d'assurance",
      ],
      format: [
          "Méthode guidée et concrète",
          "Outils pratiques et accompagnement",
          "Certificat reconnu",
      ],
      date: ""
  },
];

export function getFormationBySlug(slug: string) {
  return formations.find((formation) => formation.slug === slug);
}
