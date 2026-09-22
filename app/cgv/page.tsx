import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Essenti'Elle",
  description: "Conditions générales de vente d'Essenti'Elle Formation & Bien-être.",
};

type Article = { title: string; paragraphs?: string[]; items?: string[] };

const articles: Article[] = [
  {
    title: "Identification de l’entreprise",
    paragraphs: [
      "Les présentes Conditions Générales de Vente sont proposées par :",
      "ESSENTI ELLE FORMATION ET BIEN ÊTRE\nSociété Unipersonnelle à Responsabilité Limitée (SUARL)\nCapital social : 5 000 DT\nSiège social : Avenue Salah Ben Youssef, face Carrefour EXPRESS Local n°1 et n°2, 4116 Midoun, Djerba, Médenine, Tunisie\nRNE / Identifiant unique : 1994325C\nN° de gestion interne RNE : B50379212026\nMatricule fiscal : 1994325C\nTéléphone : +216 23 163 109\nE-mail professionnel : essentielleformationbienetre@gmail.com\nE-mail personnel de la gérante : linda.linda.chaibi@gmail.com\nGérante : Linda Chaibi",
      "Ci-après désignée « Essenti’Elle » ou « le Centre ».",
      "Le RNE identifie la société sous la dénomination « ESSENTI ELLE FORMATION ET BIEN ÊTRE » et indique comme siège Rue Salah Ben Youssef, 4116 Midoun, Médenine. Extrait RNE du 2 septembre 2026.",
    ],
  },
  {
    title: "Objet des présentes CGV",
    paragraphs: ["Les présentes Conditions Générales de Vente définissent les droits et obligations d’Essenti’Elle et de ses clients ou stagiaires dans le cadre de la vente de prestations proposées par le Centre, notamment :"],
    items: [
      "Prestations de massage, relaxation, bien-être et soins corporels relevant des activités légalement exercées par le Centre ;",
      "Formations, ateliers et actions pédagogiques proposés par Essenti’Elle, sous réserve des autorisations, agréments ou formalités éventuellement exigés pour l’activité concernée ;",
      "Vente éventuelle de supports pédagogiques, kits ou produits associés lorsque ceux-ci sont expressément proposés.",
    ],
  },
  {
    title: "Champ d’application",
    paragraphs: [
      "Les présentes CGV s’appliquent à toute commande ou réservation effectuée auprès d’Essenti’Elle, notamment au Centre, par téléphone, par e-mail ou par l’intermédiaire du site internet.",
      "Le client ou stagiaire est invité à prendre connaissance des présentes CGV avant toute commande, inscription ou réservation.",
      "La validation d’une commande, d’une inscription ou d’une réservation implique l’acceptation des présentes CGV, selon les modalités présentées au client au moment de la commande.",
    ],
  },
  {
    title: "Prestations de bien-être",
    paragraphs: [
      "Essenti’Elle propose des prestations relevant du bien-être, de la relaxation et des soins corporels correspondant aux activités autorisées et déclarées du Centre.",
      "Les massages et techniques de bien-être proposés par Essenti’Elle ont une finalité de bien-être et de relaxation.",
      "Sauf lorsqu’une prestation est légalement réalisée par un professionnel de santé habilité dans son propre champ de compétences, les prestations proposées par Essenti’Elle ne constituent ni un acte médical, ni un diagnostic, ni un traitement médical, ni une consultation de kinésithérapie ou de physiothérapie. Elles ne remplacent pas une consultation auprès d’un médecin ou d’un autre professionnel de santé qualifié.",
      "En présence d’une maladie, d’une douleur importante ou inexpliquée, d’une grossesse, d’un traitement médical, d’une intervention chirurgicale récente ou de toute situation susceptible de constituer une contre-indication, le client doit en informer le Centre avant la prestation et, lorsque cela est nécessaire, demander l’avis de son professionnel de santé.",
      "Essenti’Elle se réserve le droit de reporter ou de refuser une prestation lorsqu’elle estime que les conditions nécessaires à sa réalisation ne sont pas réunies.",
    ],
  },
  {
    title: "Formations",
    paragraphs: [
      "Les caractéristiques de chaque formation sont précisées dans le programme ou la fiche de formation correspondante : intitulé, objectifs, contenu, durée, prérequis éventuels, public visé, modalités pédagogiques, tarif et modalités d’évaluation.",
      "L’inscription à une formation n’est considérée comme définitive qu’après accomplissement des formalités indiquées lors de l’inscription et paiement de la somme éventuellement exigée pour réserver la place.",
      "Lorsque la réglementation impose une autorisation, un agrément ou une autre formalité préalable pour une catégorie particulière de formation, celle-ci ne sera organisée sous ce statut qu’après accomplissement des démarches nécessaires.",
    ],
  },
  {
    title: "Attestations et certificats",
    paragraphs: ["Selon la formation suivie et les modalités annoncées dans son programme, Essenti’Elle peut remettre au stagiaire une :"],
    items: ["Attestation de présence ;", "Attestation de fin de formation ;", "Ou certificat de réussite lorsque les conditions pédagogiques et d’évaluation prévues sont remplies."],
  },
  {
    title: "Prix",
    paragraphs: [
      "Les prix applicables sont ceux affichés sur le site, communiqués au client ou indiqués sur le devis, la fiche de formation ou le document contractuel au moment de la commande.",
      "Pour les prestations réalisées en Tunisie, les prix peuvent être exprimés en dinars tunisiens (DT/TND).",
      "Essenti’Elle se réserve le droit de modifier ses tarifs à tout moment. Toutefois, une commande ou inscription déjà validée reste facturée selon le tarif accepté lors de sa validation, sauf modification expressément convenue entre les parties.",
      "Les éventuels frais supplémentaires sont communiqués avant validation lorsqu’ils sont applicables.",
    ],
  },
  {
    title: "Modalités de paiement",
    paragraphs: ["Les moyens de paiement acceptés sont ceux proposés par Essenti’Elle au moment de la réservation ou de la commande.", "Selon la prestation ou la formation, Essenti’Elle peut demander :"],
    items: ["Le paiement intégral ;", "Un acompte à l’inscription ;", "Ou un paiement échelonné lorsqu’une telle facilité est expressément proposée."],
  },
  {
    title: "Réservation des prestations de bien-être",
    paragraphs: [
      "Les rendez-vous sont accordés sous réserve de disponibilité.",
      "Essenti’Elle peut demander une confirmation ou un acompte afin de garantir la réservation.",
      "Le client doit se présenter à l’heure convenue.",
      "En cas de retard du client, Essenti’Elle pourra, lorsque le planning l’impose, réduire la durée de la prestation afin de ne pas pénaliser les rendez-vous suivants.",
      "En cas de retard important rendant la prestation impossible dans de bonnes conditions, le rendez-vous pourra être considéré comme annulé.",
    ],
  },
  {
    title: "Annulation ou report d’un rendez-vous",
    paragraphs: [
      "Toute demande d’annulation ou de report doit être communiquée au Centre dans les meilleurs délais par les moyens de contact mis à disposition.",
      "Les conditions particulières d’annulation, notamment le délai permettant de reporter sans frais un rendez-vous ou les conséquences d’une absence sans préavis, doivent être communiquées au client lors de la réservation.",
      "Lorsqu’un acompte a été demandé, son remboursement ou son report est déterminé conformément aux conditions communiquées lors de la réservation et aux dispositions légales impératives applicables.",
      "En cas d’annulation d’une prestation par Essenti’Elle, le client pourra bénéficier d’un nouveau rendez-vous ou, lorsque la prestation payée ne peut pas être exécutée, du remboursement des sommes correspondantes.",
    ],
  },
  {
    title: "Annulation ou report d’une formation",
    paragraphs: [
      "Essenti’Elle peut être amenée à reporter une session de formation, notamment lorsque les conditions nécessaires à son bon déroulement ne sont pas réunies ou en cas de force majeure.",
      "Le stagiaire concerné est informé dans les meilleurs délais.",
      "Lorsque la formation est annulée définitivement par Essenti’Elle et qu’aucune solution de remplacement n’est acceptée, les sommes versées au titre de la prestation non réalisée sont remboursées selon les dispositions applicables.",
      "Les conséquences d’une annulation à l’initiative du stagiaire sont précisées dans le contrat ou les conditions particulières de la formation.",
    ],
  },
  {
    title: "Absence ou abandon d’une formation",
    paragraphs: [
      "Le stagiaire s’engage à respecter les horaires et le programme de la formation.",
      "Les absences peuvent avoir une incidence sur la délivrance de l’attestation ou du certificat lorsque l’assiduité constitue une condition de validation.",
      "Un abandon volontaire en cours de formation ne donne pas automatiquement droit au remboursement des sommes déjà versées. Les conséquences financières sont déterminées par le contrat de formation, les conditions particulières acceptées lors de l’inscription et la réglementation applicable.",
    ],
  },
  {
    title: "Comportement et règlement intérieur",
    paragraphs: ["Toute personne accueillie dans les locaux d’Essenti’Elle doit respecter :"],
    items: ["Le personnel, les formateurs, les praticiens et les autres stagiaires ou clients ;", "Les règles d’hygiène et de sécurité, les locaux et le matériel ainsi que le règlement intérieur applicable."],
  },
  {
    title: "Hygiène et sécurité",
    paragraphs: [
      "Essenti’Elle veille à mettre en œuvre les règles d’hygiène et de sécurité applicables à ses activités.",
      "Les stagiaires et clients doivent respecter les consignes données par le personnel.",
      "Dans le cadre des formations comportant de la pratique, le stagiaire doit utiliser le matériel conformément aux instructions du formateur.",
      "Il doit immédiatement signaler tout incident, malaise, accident ou détérioration du matériel.",
    ],
  },
  {
    title: "Responsabilité",
    paragraphs: [
      "Essenti’Elle s’engage à exécuter les prestations conformément à leur description et dans le respect des obligations applicables à son activité.",
      "Le Centre ne pourra être tenu responsable des conséquences résultant d’informations importantes volontairement omises par le client ou le stagiaire, notamment lorsqu’elles concernent une contre-indication connue ou une situation susceptible d’affecter la réalisation de la prestation, sous réserve des responsabilités auxquelles la loi ne permet pas de déroger.",
      "Essenti’Elle ne garantit aucun résultat médical ou thérapeutique à la suite d’une prestation de bien-être.",
    ],
  },
  {
    title: "Effets personnels",
    paragraphs: ["Les clients et stagiaires sont invités à surveiller leurs objets personnels.", "Dans les limites autorisées par la réglementation applicable, Essenti’Elle ne pourra être tenue responsable de la perte, de l’oubli ou du vol d’effets personnels lorsqu’aucune faute imputable au Centre n’est établie."],
  },
  {
    title: "Supports pédagogiques et propriété intellectuelle",
    paragraphs: [
      "Les cours, protocoles, documents, vidéos, photographies, illustrations, fiches pédagogiques, questionnaires, méthodes, contenus numériques et autres supports remis ou rendus accessibles par Essenti’Elle restent protégés par les droits de propriété intellectuelle applicables.",
      "Sauf autorisation écrite, ils sont destinés à l’utilisation personnelle du stagiaire.",
      "Ils ne peuvent notamment pas être reproduits intégralement, revendus, diffusés publiquement ou mis à disposition de tiers lorsque cette utilisation porte atteinte aux droits d’Essenti’Elle ou de leurs auteurs respectifs.",
      "L’inscription à une formation n’entraîne aucun transfert automatique des droits de propriété intellectuelle sur les supports pédagogiques.",
    ],
  },
  {
    title: "Droit à l’image",
    paragraphs: [
      "La participation à une formation ou à une prestation n’autorise pas automatiquement Essenti’Elle à utiliser l’image d’un client ou d’un stagiaire à des fins publicitaires.",
      "Lorsque des photographies ou vidéos permettant d’identifier une personne sont destinées à être utilisées pour la communication du Centre, une autorisation appropriée est recueillie lorsque celle-ci est légalement nécessaire.",
      "Le refus d’autoriser une utilisation promotionnelle de son image ne doit pas empêcher l’accès normal à une prestation déjà contractée lorsque cette utilisation n’est pas indispensable à sa réalisation.",
    ],
  },
  {
    title: "Données personnelles",
    paragraphs: [
      "Essenti’Elle peut collecter les données nécessaires à la gestion des demandes de renseignements, rendez-vous, inscriptions, formations, paiements, attestations, factures et relations avec ses clients et stagiaires.",
      "Les données collectées doivent être utilisées pour les finalités annoncées et conformément à la réglementation applicable en matière de protection des données personnelles.",
      "Les informations ne doivent pas être communiquées à des tiers sans fondement approprié, sauf lorsque cette communication est nécessaire à l’exécution de la prestation ou imposée par une obligation légale.",
      "Les demandes relatives aux données personnelles peuvent être adressées à : essentielleformationbienetre@gmail.com",
    ],
  },
  {
    title: "Confidentialité",
    paragraphs: ["Essenti’Elle veille à la confidentialité des informations personnelles communiquées dans le cadre de ses prestations, sous réserve des obligations légales applicables.", "Les stagiaires participant à des exercices pratiques doivent également respecter la confidentialité des informations personnelles auxquelles ils pourraient avoir accès dans ce cadre."],
  },
  {
    title: "Réclamations",
    paragraphs: [
      "Toute réclamation concernant une prestation, une formation, une commande ou une facturation peut être adressée à :",
      "ESSENTI ELLE FORMATION ET BIEN ÊTRE\nAvenue Salah Ben Youssef, face Carrefour, Local n°1\n4116 Midoun, Djerba, Médenine, Tunisie\nE-mail : essentielleformationbienetre@gmail.com\nTéléphone : +216 23 163 109",
      "La réclamation doit comporter suffisamment d’informations pour permettre au Centre d’identifier la prestation concernée et de traiter la demande.",
    ],
  },
  {
    title: "Force majeure",
    paragraphs: ["Aucune partie ne pourra être tenue responsable d’un manquement résultant directement d’un événement de force majeure reconnu comme tel par la réglementation applicable.", "Lorsqu’un tel événement empêche temporairement l’organisation d’une formation ou d’une prestation, Essenti’Elle pourra proposer son report."],
  },
  {
    title: "Modification des CGV",
    paragraphs: ["Essenti’Elle peut modifier les présentes CGV afin notamment de tenir compte de l’évolution de ses services ou de la réglementation.", "La version applicable à une commande est celle portée à la connaissance du client lors de la conclusion de celle-ci, sous réserve des dispositions légales impératives.", "La date de dernière mise à jour est indiquée en tête du présent document."],
  },
  {
    title: "Droit applicable et règlement des litiges",
    paragraphs: ["Les présentes CGV sont soumises au droit tunisien pour les activités commercialisées et exécutées par la société tunisienne Essenti’Elle Formation et Bien-Être, sous réserve des règles impératives éventuellement applicables à la situation du consommateur.", "En cas de différend, les parties sont invitées à rechercher en premier lieu une solution amiable.", "À défaut d’accord amiable, le litige pourra être porté devant les juridictions compétentes conformément aux règles légales applicables."],
  },
  {
    title: "Acceptation des CGV",
    paragraphs: ["Avant toute commande en ligne nécessitant l’acceptation des présentes conditions, le client est invité à en prendre connaissance.", "Lorsque le parcours de commande le prévoit, le client confirme son acceptation en cochant une case prévue à cet effet avant la validation définitive.", "Exemple de mention à placer à côté de la case : « Je reconnais avoir lu et accepté les Conditions Générales de Vente d’Essenti’Elle Formation & Bien-Être. »"],
  },
];

export default function CgvPage() {
  return (
    <main className="cgv-page">
      <section className="cgv-hero">
        <div className="wrap cgv-hero-inner">
          <span className="label">Informations légales</span>
          <h1>Conditions Générales de Vente</h1>
          <p>Essenti’Elle Formation &amp; Bien-être</p>
          <div className="cgv-date">Dernière mise à jour : 19 septembre 2026</div>
        </div>
      </section>
      <section className="cgv-content">
        <div className="wrap cgv-layout">
          <aside className="cgv-summary">
            <span className="label">À lire avant toute réservation</span>
            <p>Ces conditions encadrent les prestations de bien-être, les soins non médicaux et les formations proposés par Essenti’Elle.</p>
            <a href="mailto:essentielleformationbienetre@gmail.com">Une question ? Écrivez-nous</a>
          </aside>
          <div className="cgv-articles">
            {articles.map((article, index) => (
              <article className="cgv-article" key={article.title}>
                <div className="cgv-article-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h2>Article {index + 1} – {article.title}</h2>
                  {article.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {article.items && <ul>{article.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
