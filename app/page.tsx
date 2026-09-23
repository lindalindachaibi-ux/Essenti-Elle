import CinematicEngine from "@/components/CinematicEngine";
import SoinsSection from "@/components/Soinssection";
export default function Home() {
  return (
    <>
      <CinematicEngine />

      <header>
        <div className="nav">
          <div className="brand">
            <span className="brand-name serif">Essenti&apos;Elle</span>
            <span className="brand-tag script">Formation et Bien-être</span>
          </div>
          <nav className="nav-links">
            <a href="/formations">Formations</a>
            <a href="#soins">Soins</a>
            <a href="#format">A propos</a>
            <a href="#avis">Avis</a>
          </nav>
          <a href="/contact" className="nav-cta">
            Nous contacter
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-layout">
          <div className="hero-inner">
            <span className="label eyebrow">
              CENTRE DE FORMATION   Bien-être & Accompagnement
            </span>
            <h1>
              Une approche globale{" "}
              <span>pour soulager, rééquilibrer et prévenir durablement</span>
            </h1>
            <p className="hero-copy">
              Développez vos compétences au service du bien-être et de l’accompagnement .
            Des formations professionnelles destinées aux femmes, autour du bien-être, de l’accompagnement, de l’hygiène de vie, de l’équilibre alimentaire, de la connaissance du corps et du développement personnel.
            </p>
            <a href="/formations" className="btn-primary">
              Découvrir les formations
            </a>
          </div>

          <div className="hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/citation.jpeg" alt="Essenti'Elle" />
          </div>
        </div>
      </section>

      {/* FORMATION PHARE */}
      <section id="formations">
        <div className="wrap">
          <div className="flagship reveal">
            <div className="flagship-media reveal-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="changement  de perspective.jpg"
                alt="Changement de Perspective"
              />
              <div className="flagship-price">550 DT</div>
            </div>
            <div>
              <span className="label">Formation Exclusive</span>
              <h3>
                Communication, confiance en soi et gestion du stress</h3>
              <p className="flagship-sub">
                Confiance · Équilibre · Développement personnel
              </p>
              <ul className="check-list">
                <li>Connaissance de soi</li>
                <li>Gestion des émotions</li>
                <li>Confiance en soi</li>
                <li>Outils pratiques et guidés</li>
                <li>Certificat de participation à la formation</li>
                 
              </ul>
              <div className="badges">
                <div className="badge">Un protocole complet étape par étape</div>
                <div className="badge">Un certificat reconnu</div>
                <div className="badge">Possibilité d’hébergement de 5 à 10 personnes</div>
                <div className="badge">
                  Un kit de démarrage pour lancer votre activité
                </div>
              </div>
              <a href="/formations/changement-de-perspective" className="btn-primary">
                Je découvre cette formation
              </a>
            </div>
          </div>

          {/* 3 formations */}
          <div className="cards-grid">
            {[
              {
                img: "/jus-vert.jpg",
                name: "Éducation à l'équilibre alimentaire et à l'hygiène de vie",
                meta: "3 jours · 590 DT",
                desc: "Nutrition, équilibre alimentaire et hygiène de vie.",
                href: "/formations/nutrition",
              },
              {
                img: "/ostéopathie-image.jpg",
                name: " Initiation à l'anatomie et à la biomécanique du corps humain",
                meta: "3 jours · 990 DT",
                desc: " Anatomie fonctionnelle, biomécanique et techniques corporelles.",
                href: "/formations/osteopathie",
              },
              {
                img: "/hijama2.jpg",
                name: "Hijama",
                meta: "3 jours · 690 DT",
                desc: "Un soin ancestral purifiant pour relancer la circulation et rééquilibrer le corps.",
                href: "/formations/hijama",
              },
              {
                img: "/Kobido.png",
                name: "Kobido",
                meta: "3 jours · 890 DT",
                desc: "Un massage énergisant pour réveiller la vitalité, la circulation et l'éclat naturel du visage.",
                href: "/formations/kobido",
              },
              {
                img: "/massage cellulite.png",
                name: "Anti-cellulite",
                meta: "3 jours · 690 DT",
                desc: "Des gestes ciblés pour tonifier, drainer et améliorer la texture de peau en douceur.",
                href: "/formations/anti-cellulite",
              },
            ].map((f) => (
              <div className="card reveal" key={f.name}>
                <div className="card-media reveal-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt={f.name} />
                </div>
                <div className="card-body">
                  <h4>{f.name}</h4>
                  <div className="card-meta">{f.meta}</div>
                  <p className="card-desc">{f.desc}</p>
                  <a href={f.href} className="card-link">
                    En savoir plus
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="center-cta reveal">
            <a href="/formations/" className="btn-outline">
              Voir le catalogue complet
            </a>
          </div>
        </div>
      </section>

      {/* NOS SOINS */}
      <SoinsSection />

      {/* FORMAT */}
      <section id="format" className="format-section curtain">
        <div className="curtain-fill"></div>
        <div className="wrap curtain-content">
          <div className="section-head">
            <span className="label">Deux façons de vous former</span>
            <h2>Comment allez-vous vous former, selon votre disponibilité ?</h2>
          </div>
          <div className="format-grid">
            <div className="format-col">
              <div className="icon">⌂</div>
              <h3>Présentiel</h3>
              <ul>
                <li>Cours théoriques, démonstrations et mises en situation</li>
                <li>Techniques et protocoles professionnels
Évaluation des acquis</li>
                <li>Attestation de fin de formation délivrée par Essenti’Elle</li>
              </ul>
            </div>
            <div className="format-col">
              <div className="icon">◷</div>
              <h3>En ligne</h3>
              <ul>
                <li>Formation accessible à votre rythme 24h/24</li>
                <li>Quiz et évaluations tout au long du parcours
Évaluation finale</li>
                <li>Certificat de réussite Essenti’Elle délivré après validation du parcours</li>
                « Démarches d’agrément et d’homologation en cours auprès des organismes compétents. »
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section id="avis">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">Elles témoignent</span>
            <h2>Ce que disent nos anciennes élèves</h2>
          </div>
          <div className="testi-grid">
            {[
              {
                quote:
                  '"La formation nutrition m’a aidé à mieux comprendre le lien entre alimentation, énergie et équilibre global. J’ai pu appliquer ces connaissances dans ma vie quotidienne et dans mon accompagnement."',
                initial: "N",
                name: "Nour, nutritionniste",
              },
              {
                quote:
                  '"J’ai découvert un cadre très clair et rassurant sur la naturopathie. Les contenus étaient riches, pratiques et vraiment orientés vers un accompagnement humain et professionnel."',
                initial: "A",
                name: "Amel, naturopathe",
              },
              {
                quote:
                  '"Cette formation m’a donné confiance pour avancer dans ma démarche professionnelle. Le programme est structuré, inspirant et très utile pour développer une vraie pratique de bien-être."',
                initial: "S",
                name: "Sonia, participante en formation",
              },
            ].map((t) => (
              <div className="testi-card reveal" key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-who">
                  <div className="avatar">{t.initial}</div>
                  <span className="testi-name">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand" style={{ marginBottom: "14px" }}>
                <span className="brand-name serif">Essenti&apos;Elle</span>
                <span className="brand-tag script">Formation et Bien-être</span>
              </div>
              <p style={{ maxWidth: "280px" }}>
                Centre de formation professionnelle 100% féminin — bien-être et
                développement personnel.
              </p>
            </div>
            <div>
              <h5>Contact</h5>
              <a href="https://wa.me/21623163109">WhatsApp Tunisie</a>
              <a href="https://www.tiktok.com/@essentielle.formation.tn" target="_blank" rel="noopener noreferrer">TikTok</a>
              <a href="https://www.instagram.com/essentielle_formation_bienetre/  " target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61593057701789" target="_blank" rel="noopener noreferrer">Facebook</a>
             <a href="mailto:contact@essentielle-bienetre.com">contact@essentielle-bienetre.com</a>
            </div>
            <div>
              <h5>Informations</h5>
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/cgv">CGV</a>
              <a href="/formations">Catalogue des formations</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Essenti&apos;Elle. Tous droits réservés.</span>
            <span>Design maquette — aperçu de travail</span>
          </div>
        </div>
      </footer>
    </>
  );
}
