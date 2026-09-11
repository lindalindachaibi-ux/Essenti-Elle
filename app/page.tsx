import CinematicEngine from "@/components/CinematicEngine";

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
            <a href="#formations">Formations</a>
            <a href="#soins">Soins</a>
            <a href="#format">A propos</a>
            <a href="#avis">Avis</a>
          </nav>
          <a href="#" className="nav-cta">
            Nous contacter
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-leaf"
          src="/image%20globale.png"
          alt=""
        />
        <div className="wrap">
          <div className="hero-inner">
            <span className="label eyebrow reveal">
              Centre de formation professionnelle international
            </span>
            <h1 className="reveal">
              Une approche globale{" "}
              <span>pour soulager, rééquilibrer et prévenir durablement</span>
            </h1>
            <p className="hero-copy reveal">
              Des formations pensées pour les femmes, entre expertise thérapeutique
              et bien-être — réflexologie, kinésiologie, massages, ostéopathie,
              hijama, nutrition.
            </p>
            <a href="#formations" className="btn-primary reveal">
              Découvrir les formations
            </a>
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
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=70"
                alt="Changement de Perspective"
              />
              <div className="flagship-price">550 DT</div>
            </div>
            <div>
              <span className="label">Formation phare</span>
              <h3>Changement de Perspective</h3>
              <p className="flagship-sub">
                Confiance · Équilibre · Développement personnel
              </p>
              <ul className="check-list">
                <li>Connaissance de soi</li>
                <li>Gestion des émotions</li>
                <li>Confiance en soi</li>
                <li>Outils pratiques et guidés</li>
              </ul>
              <div className="badges">
                <div className="badge">Un protocole complet étape par étape</div>
                <div className="badge">Un certificat reconnu</div>
                <div className="badge">
                  Un kit de démarrage pour lancer votre activité
                </div>
              </div>
              <a href="#" className="btn-primary">
                Je découvre cette formation
              </a>
            </div>
          </div>

          {/* 3 formations */}
          <div className="cards-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=70",
                name: "Réflexologie",
                meta: "3 jours · 790 DT",
                desc: "Une technique manuelle ciblée pour rétablir l'équilibre énergétique du corps.",
              },
              {
                img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=70",
                name: "Kinésiologie",
                meta: "4 jours · 990 DT",
                desc: "Une lecture du corps et des émotions au service d'un mieux-être durable.",
              },
              {
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=70",
                name: "Ostéopathie",
                meta: "5 jours · 990 DT",
                desc: "Une approche manuelle globale pour soulager durablement les tensions du corps.",
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
                  <a href="#" className="card-link">
                    En savoir plus
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="center-cta reveal">
            <a href="#" className="btn-outline">
              Voir le catalogue complet
            </a>
          </div>
        </div>
      </section>

      {/* NOS SOINS */}
      <section id="soins" className="soins-section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">L&apos;expérience client</span>
            <h2>Nos soins</h2>
          </div>
          <div className="soins-grid">
            <div className="soin-card reveal">
              <div className="soin-icon">H</div>
              <h4>Hijama</h4>
              <p>
                Un soin par ventouses, ancestral et purifiant, pour relancer la
                circulation et l&apos;énergie.
              </p>
            </div>
            <div className="soin-card reveal">
              <div className="soin-icon">M</div>
              <h4>Massage</h4>
              <p>
                Kobido, anti-cellulite, drainage lymphatique — des soins
                sur-mesure selon vos besoins.
              </p>
            </div>
            <div className="soin-card reveal">
              <div className="soin-icon">N</div>
              <h4>Nutrition</h4>
              <p>Un rééquilibrage alimentaire personnalisé, pensé pour durer.</p>
            </div>
          </div>
          <div className="center-cta reveal">
            <a href="#" className="btn-outline">
              Voir tous les soins
            </a>
          </div>
        </div>
      </section>

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
                <li>3 jours de formation à l&apos;académie</li>
                <li>Hébergement possible sur place</li>
                <li>Certificat international reconnu</li>
              </ul>
            </div>
            <div className="format-col">
              <div className="icon">◷</div>
              <h3>En ligne</h3>
              <ul>
                <li>Cours disponibles 24h/24</li>
                <li>Quiz entre chaque module, à valider un par un</li>
                <li>Test final pour obtenir la certification</li>
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
                  "\"Une formation exigeante et humaine à la fois. J'ai lancé mon activité trois mois après avoir terminé le protocole.\"",
                initial: "S",
                name: "Salma, Réflexologue",
              },
              {
                quote:
                  '"Le format en ligne m\'a permis de me former tout en gardant mon emploi. Le suivi était vraiment présent."',
                initial: "I",
                name: "Ines, Kinésiologue",
              },
              {
                quote:
                  '"Changement de Perspective a changé ma façon de voir mon métier et ma confiance en moi."',
                initial: "R",
                name: "Rym, Praticienne bien-être",
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
              <a href="#">WhatsApp Tunisie</a>
              <a href="#">WhatsApp France</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
            <div>
              <h5>Informations</h5>
              <a href="#">Mentions légales</a>
              <a href="#">CGV</a>
              <a href="#">Catalogue des formations</a>
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
