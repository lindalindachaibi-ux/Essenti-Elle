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
      slug: "changement-de-perspective",
      title: "Communication, confiance en soi et gestion du stress",
      label: "Public : adultes, entrepreneures, professionnelles de l'accompagnement",
      duration: "3 j / 24 h",
      price: "550 DT",
      image: "/changement  de perspective.jpg",
      description: "Techniques de développement personnel et gestion du stress.",
      summary: "Connaissance de soi, communication, confiance en soi, gestion du stress, fixation d'objectifs, organisation, communication professionnelle et plan d'action personnel.",
      goals: [
          "Développer sa connaissance de soi",
          "Améliorer sa communication et sa confiance en soi",
          "Mieux gérer le stress au quotidien",
          "Fixer des objectifs réalistes et structurés",
          "Organiser son travail et son plan d'action personnel",
          "Renforcer sa communication professionnelle",
      ],
      format: [
          "Ateliers pratiques et échanges guidés",
          "Outils de développement personnel et plan d'action",
          "Certificat : Techniques de développement personnel et gestion du stress",
      ],
      date: ""
  },
  {
      slug: "kinesiologie",
      title: "Kinésiologie",
      label: "Public : professionnelles du bien-être et accompagnement",
      duration: "3 jours",
      price: "990 DT",
      image: "/kiné.jpg",
      description: "Techniques corporelles de bien-être et gestion du stress",
      summary: "La kinésiologie est une approche holistique qui utilise le mouvement et la conscience corporelle pour favoriser l'équilibre émotionnel, la relaxation et le bien-être général.",
      goals: [
          "Comprendre l'anatomie fonctionnelle et les mécanismes du mouvement",
          "Identifier les muscles, articulations, posture et habitudes corporelles",
          "Repérer le stress et les réactions corporelles associées",
          "Appliquer des techniques corporelles non médicales et des exercices de relaxation",
          "Respecter les limites professionnelles et accompagner de manière sécurisante",
      ],
      format: [
          "Démonstrations et pratique guidée",
          "Étude de l'anatomie fonctionnelle, du mouvement et du stress",
          "Certificat : Techniques corporelles de bien-être et gestion du stress",
      ],
      date: ""
  },
  {
      slug: "osteopathie",
      title: " Initiation à l'anatomie et à la biomécanique du corps humain",
      label: "Anatomie · biomécanique · techniques corporelles",
      duration: "3–5 j",
      price: "1 290–1 490 DT",
      image: "/ostéopathie-image.jpg",
      description: "Anatomie fonctionnelle, biomécanique et techniques corporelles",
      summary: "Approche globale de l'anatomie musculo-squelettique, des articulations, de la biomécanique, de la posture, de la mobilité et des précautions professionnelles.",
      goals: [
          "Comprendre l'anatomie musculo-squelettique et les articulations",
          "Analyser la biomécanique, la posture et la mobilité",
          "Observer le corps et identifier les dysfonctionnements",
          "Appliquer des techniques corporelles autorisées avec rigueur",
          "Respecter les précautions, contre-indications, signes d'alerte et principes d'ergonomie",
      ],
      format: [
          "Anatomie fonctionnelle, biomécanique et observation corporelle",
          "Ergonomie, précautions et signes d'alerte",
          "Techniques corporelles autorisées et approche professionnelle",
      ],
      date: ""
  },
  {
      slug: "nutrition",
      title: "Nutrition générale",
      label: "Public : professionnelles du bien-être, auxiliaires de vie et personnes souhaitant développer des connaissances en alimentation",
      duration: "3 j / 24 h",
      price: "990 DT",
      image: "/jus%20detox.png",
      description:"Nutrition, équilibre alimentaire et hygiène de vie",
      summary: "Contenu : macronutriments, micronutriments, hydratation, besoins selon l'âge, équilibre alimentaire, lecture des étiquettes, composition des repas, hygiène alimentaire, prévention générale et limites professionnelles.",
      goals: [
          "Comprendre les macronutriments et micronutriments",
          "Identifier les besoins hydriques et les besoins selon l'âge",
          "Établir un équilibre alimentaire durable",
          "Savoir lire les étiquettes et composer un repas équilibré",
          "Appliquer les règles d'hygiène alimentaire et respecter les limites professionnelles",
      ],
      format: [
          "Apports théoriques fondamentaux",
          "Exercices de mise en pratique",
          "Certificat : Nutrition, équilibre alimentaire et hygiène de vie",
      ],
      date: ""
  },
  {
      slug: "hijama",
      title: "Hijama",
      label: "Soin ancestral et régénérant",
      duration: "3 jours",
      price: "690 DT",
      image: "/hijama2.jpg",
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
      label: "Public : professionnelles du bien-être, esthétique et personnes en reconversion",
      duration: "3 j / 24 h",
      price: "790 DT",
      image: "/reflexologie.jpg",
      description: "Techniques de relaxation et stimulation manuelle appliquées au bien-être",
      summary: "La réflexologie agit sur les zones réflexes du pied pour soulager les tensions, le stress et les déséquilibres corporels.",
      goals: [
          "principes des techniques réflexes",
          "anatomie générale",
          "zones pieds/mains ",
          "relaxation",
          " protocole complet",
          "accueil et fiche cliente",
         "hygiène précautions et contre-indications"
      ],
      format: [
          "démonstration",
          "pratique supervisée et évaluation",
          " Certificat de formation  :Techniques de relaxation et stimulation manuelle appliquées au bien-être ",
      ],
      date: ""
  },
  {
      slug: "kobido",
      title: "Techniques manuelles esthétiques du visage et du cou",
      label: "Public : esthéticiennes et professionnelles du bien-être",
      duration: "3 j / 24 h",
      price: "890 DT",
      image: "/Kibodo 1-ezremove.png",
      description: "Formation dédiée aux techniques manuelles esthétiques du visage et du cou, avec une approche précise sur l'anatomie, la préparation du client, les manœuvres et les précautions à respecter.",
      summary: "Contenu : anatomie superficielle du visage et du cou, hygiène, préparation de la cliente, manœuvres esthétiques, rythme/pression, protocole visage-cou, précautions, contre-indications, démonstration et évaluation pratique.",
      goals: [
          "Comprendre l'anatomie superficielle du visage et du cou",
          "Appliquer les règles d'hygiène et de préparation de la cliente",
          "Maîtriser les manœuvres esthétiques et le rythme de pression",
          "Respecter le protocole visage-cou, les précautions et contre-indications",
          "Réaliser une démonstration et une évaluation pratique sécurisée",
      ],
      format: [
          "Démonstration pratique et évaluation",
          "Approche esthétique du visage et du cou",
          "Certificat : Techniques manuelles esthétiques du visage et du cou",
      ],
      date: ""
  },
  {
      slug: "anti-cellulite",
      title: "Anti-cellulite",
      label: "Sculptage · remodelage · tonification",
      duration: "3 j / 24 h",
      price: "990 DT",
      image: "/massage2.jpg",
      description: "Techniques manuelles esthétiques et remodelage corporel",
      summary: "Cette formation se concentre sur les techniques manuelles esthétiques et le remodelage corporel pour aider à réduire l'apparence de la cellulite, améliorer la circulation et tonifier la peau.",
      goals: [
          "Comprendre l'anatomie générale et le tissu cutané",
          "Maîtriser les techniques esthétiques manuelles de remodelage",
          "Étudier le protocole corporel et les bonnes pratiques d'hygiène",
          "Identifier les précautions et contre-indications",
          "Réaliser une pratique guidée avec évaluation professionnelle",
      ],
      format: [
          "Démonstration et pratique supervisée",
          "Protocole corporel et techniques de remodelage",
          "Certificat : Techniques manuelles esthétiques et remodelage corporel",
      ],
      date: ""
  },
  {
      slug: "aide-a-la-personne-agee",
      title: "Aide à la personne âgée",
      label: "Public :professionnelles de l'accompagnement et personnes souhaitant développer des compétences en soins aux personnes âgées",
      duration: "3 jours",
      price: "3 500 DT",
      image: "/Auxiliaire de vie.png",
      description: "Programme de sensibilisation à l'accompagnement quotidien de la personne âgée, avec une approche pratique sur l'autonomie, le confort, la sécurité et le respect de la dignité.",
      summary: "Sensibilisation à l'accompagnement quotidien de la personne âgée",
      goals: [
          "Comprendre le vieillissement et les besoins de la personne âgée",
          "Accompagner l'autonomie et la dépendance de manière respectueuse",
          "Appliquer les gestes d'hygiène, de confort et de sécurité",
          "Savoir soutenir la mobilité, les transferts et la prévention des chutes",
          "Assurer un accompagnement alimentaire, communicationnel et sécuritaire",
          "Respecter l'éthique, la confidentialité et les règles de premiers secours",
      ],
      format: [
          "Cours théoriques et cas pratiques",
          "Approche pédagogique sur l'accompagnement quotidien",
          "Certificat de formation : Technique d'aide à la personne âgée",
      ],
      date: ""
  },
  {
      slug: "soins-infirmiers-hygiene-prevention-environnement-sanitaire",
      title: " Hygiène, prévention et environnement sanitaire : connaissances générales",
      label: "Hygiène · Prévention · Environnement sanitaire",
      duration: "3 jours",
      price: "990 DT",
      image: "/soins infirmiers.jpeg",
      description: "Formation de base en hygiène, prévention et environnement sanitaire pour acquérir les connaissances essentielles des soins infirmiers et des bonnes pratiques de prévention.",
      summary: "Ce programme permet de maîtriser les fondamentaux de l'hygiène, la prévention des risques et les exigences de qualité de l'environnement sanitaire dans un cadre professionnel.",
      goals: [
          "Comprendre les principes de base de l'hygiène",
          "Identifier les risques et les mesures de prévention",
          "Appliquer les bonnes pratiques d'environnement sanitaire",
          "Assurer un cadre de travail plus sûr et plus professionnel",
      ],
      format: [
          "Cours théoriques structurés",
          "Études de cas et recommandations pratiques",
          "Certificat de formation",
      ],
      date: ""
  },
  {slug: "massage",
      title: "Massage lymphatique",
      label: "Drainage · Détente · Bien-être",
      duration: "3 jours",
      price: "550 DT",
      image: "/massage2.jpg",
      description: "Un massage doux et ciblé qui stimule le système lymphatique, améliore la circulation et aide à réduire la rétention d'eau, les tensions et le stress.",
      summary: "Le massage lymphatique aide à relancer le drainage naturel du corps, favoriser l'élimination des toxines et retrouver une sensation de légèreté, de confort et d'équilibre.",
      goals: [
          "Comprendre les principes du drainage lymphatique",
          "Maîtriser les gestes doux et efficaces du massage lymphatique",
          "Identifier les zones de stagnation et de tension",
          "Accompagner le bien-être corporel avec une approche douce et professionnelle",
      ],
      format: [
          "Initiation pratique et démonstrations",
          "Techniques de drainage sur le corps entier",
          "Certification agréé et reconnu par l'État",
      ],
      date: ""
  },
 
    
  
];

export function getFormationBySlug(slug: string) {
  return formations.find((formation) => formation.slug === slug);
}
