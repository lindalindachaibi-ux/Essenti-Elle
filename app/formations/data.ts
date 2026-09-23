export type FormationSession = {
  slug: string;
  label: string;
  dates: string;      // texte affiché, ex: "17 - 20 Octobre 2026"
  startDate: string;  // ISO, ex: "2026-10-17"
  endDate: string;    // ISO, ex: "2026-10-20"
};

export type Formation = {
  slug: string;
  category: string;
  title: string;
  label: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  summary: string;
  goals: string[];
  format: string[];
  sessions: FormationSession[];
};

export type FormationAudience = "professionnelles" | "reconversion" | "accessible";

const parcoursFormat = [
    "Formation accessible à votre rythme 24h/24",
    "Quiz et évaluations tout au long du parcours, avec évaluation finale",
    "Certificat de réussite Essenti’Elle délivré après validation du parcours",
];

const formationsData: Formation[] = [
    {
    slug: "changement-de-perspective",
    category: "Développement personnel",
      title: "Communication, confiance en soi et gestion du stress",
      label: "Public : adultes, entrepreneures, professionnelles de l'accompagnement",
      duration: "3 j ",
      price: "550 DT",
      image: "/changement  de perspective.jpg",
      description: "Techniques d'accompagnement et développement personnel",
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
      sessions: []
  },
  {
    slug: "kinesiologie",
    category: "Kinésiologie ,ostéopathie et refloxologie",
      title: "Kinésiologie",
      label: "Public déstiné : professionnelles du bien-être et accompagnement",
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
      sessions: [
          
        { slug: "octobre", label: "Session Octobre", dates: " 5-7 Octobre 2026", startDate: "2026-10-05", endDate: "2026-10-07" },
        { slug: "octobre", label: "Session Octobre", dates: " 12-14 Octobre 2026", startDate: "2026-10-12", endDate: "2026-10-14" },
         { slug: "octobre", label: "Session Octobre", dates: " 26-28 Octobre 2026", startDate: "2026-10-26", endDate: "2026-10-28" },
        { slug: "novembre", label: "Session Novembre", dates: "9 - 11 Novembre 2026", startDate: "2026-11-09", endDate: "2026-11-11" },
        { slug: "novembre", label: "Session Novembre", dates: "23 - 25 Novembre 2026", startDate: "2026-11-23", endDate: "2026-11-25" },
        { slug: "decembre", label: "Session Décembre", dates: "14 - 16 Décembre 2026", startDate: "2026-12-14", endDate: "2026-12-16" },
        { slug: "decembre", label: "Session Décembre", dates: "14 - 16 Décembre 2026", startDate: "2026-12-14", endDate: "2026-12-16" },
      
      ]
  },
  {
    slug: "osteopathie",
    category: "Kinésiologie ,ostéopathie et refloxologie",
      title: " Initiation à l'anatomie et à la biomécanique du corps humain",
      label: "Anatomie · biomécanique · techniques corporelles",
      duration: "3 j",
      price: "1 290 Dt",
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
      sessions: [
        { slug: "octobre", label: "Session Octobre", dates: " 2-4 Octobre 2026", startDate: "2026-10-02", endDate: "2026-10-04" },
        { slug: "novembre", label: "Session Novembre", dates: "6 - 8 Novembre 2026", startDate: "2026-11-06", endDate: "2026-11-08" },
        { slug: "decembre", label: "Session Décembre", dates: "4 - 6 Décembre 2026", startDate: "2026-12-04", endDate: "2026-12-06" },
      ]
  },
  {
    slug: "nutrition",
    category: "Nutrition générale et professionnelle",
      title: "Nutrition générale",
      label: "Public : professionnelles du bien-être, auxiliaires de vie et personnes souhaitant développer des connaissances en alimentation",
      duration: "3 j ",
      price: "790 DT",
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
      sessions: []
  },
  {
    slug: "naturopathie-hygiene-de-vie",
    category: "Naturopathie & hygiène de vie",
      title: "Naturopathie & Hygiène de Vie",
      label: "Public : professionnelles du bien-être, praticiennes en massage, personnes en reconversion et toute personne souhaitant développer des compétences en accompagnement du bien-être",
      duration: "3 jours",
      price: "890 DT",
      image: "/Natrupathie.png",
      description: "La formation Naturopathie & Hygiène de Vie permet d’acquérir les bases nécessaires pour comprendre les grands principes de l’hygiène de vie naturelle et de l’accompagnement global du bien-être. Elle aborde notamment l’alimentation, l’équilibre de vie, la gestion du stress, le sommeil, l’activité physique, les plantes et les techniques naturelles de bien-être.",
      summary: "Apprendre à réaliser un bilan d’hygiène de vie et à proposer des conseils personnalisés de prévention et de bien-être, sans diagnostic médical, prescription médicale ni modification d’un traitement en cours.",
      goals: [
          "Comprendre les grands principes de l’hygiène de vie naturelle",
          "Analyser les facteurs de l’équilibre alimentaire et de l’environnement de vie",
          "Identifier les bases de la gestion du stress, du sommeil et de l’activité physique",
          "Découvrir les plantes et les techniques naturelles de bien-être",
          "Réaliser un bilan d’hygiène de vie de manière globale et personnalisée",
          "Proposer des conseils de prévention et de bien-être dans le respect des limites professionnelles",
          "Respecter les règles de non-diagnostic, non-prescription et non-substitution médicale",
      ],
      format: [
          "Apports théoriques, études de cas et mises en pratique",
          "Approche holistique de l’hygiène de vie et du bien-être",
          "Certificat : Naturopathie & Hygiène de Vie",
      ],
      sessions: []
  },
  {
    slug: "hijama",
    category: "Massage, Hijama et Herboristerie",
      title: "Hijama",
      label: "Soin ancestral et régénérant",
      duration: "3 jours",
      price: "690 DT",
      image: "/hijama2.jpg",
      description: "Techniques de cupping / ventouses dans le cadre du bien-être et esthétique.",
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
      sessions: []
  },
  {
    slug: "reflexologie",
        category: "Kinésiologie ,ostéopathie et refloxologie",
      title: "Réflexologie",
      label: "Public déstiné : professionnelles du bien-être, esthétique et personnes en reconversion",
      duration: "3 j",
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
      sessions: []
  },
  {
    slug: "kobido",
    category: "Bien-être et esthétique",
      title: "Kobido",
      label: "Public : esthéticiennes et professionnelles du bien-être",
      duration: "3 j",
      price: "890 DT",
      image: "/Kobido.png",
      description: "Techniques de massage facial japonais à visée de bien-être et esthétique",
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
      sessions: []
  },
  {
    slug: "anti-cellulite",
    category: "Bien-être et esthétique",
      title: "Massage anti-cellulite",
      label: "Sculptage · remodelage · tonification",
      duration: "3 j ",
      price: "690 DT",
      image: "/massage cellulite.png",
      description: "Techniques manuelles esthétiques anti-cellulite et bien-être",
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
      sessions: []
  },
  {
    slug: "aide-a-la-personne-agee",
    category: "Soins infirmiers et accompagnement",
      title: "Sensibilisation à l'accompagnement quotidien de la personne âgée.",
      label: "Public déstiné :professionnelles de l'accompagnement et personnes souhaitant développer des compétences en soins aux personnes âgées",
      duration: "Parcours long",
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
      sessions: []
  },
  {
    slug: "nutrition-avancee",
    category: "Nutrition générale et professionnelle",
      title: " Perfectionnement en éducation nutritionnelle réservé aux professionnels concernés",
      label: "Public déstiné à restreindre selon le niveau",
      duration: "",
      price: "1 490 DT",
      image: "/Nutrition avancé.png",
      description: "Nutrition appliquée aux situations physiologiques et pathologiques",
      summary: "Physiologie de la nutrition, diabète, obésité, hypertension, dénutrition, pathologies digestives, nutrition de la personne âgée, situations hormonales, études de cas, limites professionnelles et orientation médicale.",
      goals: [
          "Comprendre la physiologie de la nutrition",
          "Analyser les situations de diabète, obésité et hypertension",
          "Identifier la dénutrition et les pathologies digestives",
          "Adapter la nutrition à la personne âgée et aux situations hormonales",
          "Étudier des cas concrets et respecter les limites professionnelles",
          "Orienter correctement vers le recours médical adapté",
      ],
      format: [
          "Apports théoriques spécialisés",
          "Études de cas et analyse de situations cliniques",
          "Certificat de perfectionnement : Nutrition appliquée aux situations physiologiques et pathologiques",
      ],
      sessions: []
  },
  {
        slug: "environnement-de-soins",
        category: "Soins infirmiers et accompagnement",
        title: "Hygiène, prévention et environnement sanitaire : connaissances générales (Environement soins)",
        label: "Techniques fondamentales d'accompagnement et environnement de soins",
        duration: "3 j / 24 h",
        price: "990 DT",
        image: "/environnement-sanitaire.png",
        description: "Techniques fondamentales d'accompagnement et environnement de soins.",
        summary: "Un parcours d'introduction pour comprendre l'environnement de soins, les règles d'hygiène, la prévention des risques et les bases de l'accompagnement.",
        goals: [
            "Comprendre les fondamentaux de l'environnement de soins",
            "Appliquer les règles essentielles d'hygiène et de prévention",
            "Adopter une posture adaptée dans l'accompagnement",
            "Identifier les situations nécessitant une orientation vers un professionnel de santé",
        ],
        format: [
            "Cours théoriques et mises en situation",
            "Techniques fondamentales d'accompagnement",
            "Certificat de formation",
        ],
        sessions: [],
    },
    {
        slug: "soins-pour-professionnels",
        category: "Soins infirmiers et accompagnement",
        title: "Hygiène, prévention et environnement sanitaire : connaissances générales (Soins pour professionnels)",
        label: "Perfectionnement professionnel aux techniques de soins",
        duration: "3 j / 24 h",
        price: "1 490 DT",
        image: "/si.png",
        description: "Perfectionnement professionnel aux techniques de soins.",
        summary: "Un parcours de perfectionnement destiné aux professionnelles qui souhaitent renforcer leurs pratiques, leur organisation et leur sécurité dans l'environnement de soins.",
        goals: [
            "Perfectionner les techniques de soins dans un cadre professionnel",
            "Renforcer les pratiques d'hygiène et de prévention des risques",
            "Améliorer l'organisation et la qualité de l'accompagnement",
            "Respecter les limites professionnelles et les protocoles de sécurité",
        ],
        format: [
            "Apports théoriques spécialisés",
            "Démonstrations et pratique supervisée",
            "Certificat de perfectionnement professionnel",
        ],
        sessions: [],
    },
    {slug: "massage",
            category: "Massage, Hijama et Herboristerie",
      title: "Drainage ",
      label: "Drainage · Détente · Bien-être",
      duration: "3 jours",
      price: "990 DT",
      image: "/massage lymphatique.png",
      description: "Techniques manuelles de drainage à visée de bien-être et esthétique.",
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
      sessions: []
  },
    {slug: "Herboristerie",
            category: "Massage, Hijama et Herboristerie",
      title: "Connaissance des plantes, usages traditionnels et bien-être",
      label: "Herboristerie · Bien-être",
      duration: "3 j",
      price: "550 DT",
      image: "/Herboristerie.jpg",
      description: "Connaissance des plantes, usages traditionnels et bien-être dans le cadre d'une approche de sensibilisation et de prévention.",
      summary: "Public déstiné : professionnelles du bien-être, personnes souhaitant développer des connaissances en herboristerie et bien-être.",
      goals: [
          "Identification des plantes usuelles",
          "Connaître les parties des plantes et leurs usages",
          "Comprendre la conservation et le stockage des plantes",
          "Découvrir les usages traditionnels et culturels",
          "Préparer des infusions sans but thérapeutique de manière sûre",
          "Respecter les règles d'hygiène et les précautions générales",
          "Identifier les plantes à risque et les interactions possibles",
          "Comprendre les limites professionnelles et l'orientation vers médecin/pharmacien",
      ],
      format: [
          "Approche pratique et pédagogique",
          "Étude des plantes, usages et précautions",
          "CERTIFICAT DE FORMATION : Connaissance des plantes, usages traditionnels et bien-être",
      ],
      sessions: []
  },
];

export const formations: Formation[] = formationsData.map((formation) => ({
    ...formation,
    format: [...formation.format, ...parcoursFormat],
}));

const audienceBySlug: Record<string, FormationAudience[]> = {
    "changement-de-perspective": ["accessible", "reconversion"],
    kinesiologie: ["professionnelles", "reconversion"],
    osteopathie: ["professionnelles", "reconversion"],
    nutrition: ["accessible", "reconversion"],
    "naturopathie-hygiene-de-vie": ["accessible", "reconversion"],
    hijama: ["professionnelles", "reconversion"],
    reflexologie: ["professionnelles", "reconversion"],
    kobido: ["professionnelles", "reconversion"],
    "anti-cellulite": ["professionnelles", "reconversion"],
    "aide-a-la-personne-agee": ["professionnelles", "reconversion"],
    "nutrition-avancee": ["professionnelles"],
    "environnement-de-soins": ["accessible", "reconversion"],
    "soins-pour-professionnels": ["professionnelles"],
    massage: ["professionnelles", "reconversion"],
    Herboristerie: ["accessible", "reconversion"],
};

export function getFormationAudiences(formation: Formation) {
    return audienceBySlug[formation.slug] ?? ["accessible"];
}

export function getFormationBySlug(slug: string) {
  return formations.find((formation) => formation.slug === slug);
}