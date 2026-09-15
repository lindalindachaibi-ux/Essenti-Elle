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
            <a href="#formations" className="btn-primary">
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
                desc: "Une approche globale pour rééquilibrer son alimentation et retrouver un bien-être durable.",
                href: "/formations/nutrition",
              },
              {
                img: "/ostéopathie-image.jpg",
                name: " Initiation à l'anatomie et à la biomécanique du corps humain",
                meta: "3 jours · 990 DT",
                desc: "Une approche manuelle globale pour soulager durablement les tensions du corps.",
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
                img: "/Kibodo 1-ezremove.png",
                name: "Kobido",
                meta: "3 jours · 890 DT",
                desc: "Un massage énergisant pour réveiller la vitalité, la circulation et l'éclat naturel du corps.",
                href: "/formations/kobido",
              },
              {
                img: "/massage2.jpg",
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

      <section id="soins" className="soins-section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">L&apos;expérience client</span>
            <h2>Nos soins</h2>
          </div>

          <div className="soins-grid">
            {[
               
              {
                img: "/jus detox.png",
                title: "Nutritionniste  ",
                badge: "Rééquilibrage",
                desc: "• Consultation Nutrition Personnalisée \n • Suivi Nutrition \n ",
              },
             
              {
                img: "/hijama2.jpg",
                title: "Hijama",
                badge: "Soin purifiant",
                desc: "• Séance curative + 10 min massage\n • Séance préventive + 10 min massage\n • Séance basique (sans massage)\n",
              },
              {
                img: "/massage2.jpg",
                title: "Massages",
                badge: "Détente & drainage",
                desc: "• Massage lymphatique\n • Massage anti-cellulite\n• Massage relaxation & détente \n• Réflexologie plantaire \n",
              },
              {
                img: "/kiné.jpg",
                title: "kinésiologue",
                badge: "Soulagement global",
                desc: "La kinésiologie est une méthode douce et efficace pour écouter le corps, identifier les tensions cachées et rétablir un équilibre profond entre le physique et l’émotionnel.",
              },
             
              {
                img: "/ostèo.jpg",
                title: "Ostéopathe",
                badge: "Soulagement global",
                desc: "Une approche manuelle douce pour retrouver mobilité, confort et équilibre dans le corps et dans les gestes du quotidien.",
              },
              {
                img: "/soins infirmiers.jpeg",
                title: "Soins infirmiers",
                badge: "Pansements",
                desc: "• Changement de pansement simple & complexe\n• Pose et surveillance de perfusion IV",
              },
            ].map((soin) => (
              <article className="soin-feature-card reveal" key={soin.title}>
                <div className="soin-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={soin.img} alt={soin.title} />
                </div>

                <div className="soin-body">
                  <span className="soin-badge">{soin.badge}</span>
                  <h4>{soin.title}</h4>
                  <p>{soin.desc}</p>
                  <div className="soin-meta">
                    
                  </div>
                </div>

                <a href="https://calendly.com/essentielle-formation-bien-etre/45min" className="soin-button">
                  Réserver votre rendez-vous
                </a>
              </article>
            ))}
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
                <li>3 jours de formation au centre</li>
                <li>Hébergement optionel</li>
                <li>Certification agréé et reconnu par l'État</li>
              </ul>
            </div>
            <div className="format-col">
              <div className="icon">◷</div>
              <h3>En ligne</h3>
              <ul>
                <li>Cours à votre rythme disponible 24/24h </li>
                <li>Quiz chaque module</li>
                <li>Certification agréé et reconnu par l'État</li>
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
              <a href="https://wa.me/21623163109">WhatsApp Tunisie</a>
              
              <a href="https://www.instagram.com/essentielle_formation_bienetre/  ">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61593057701789">Facebook</a>
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
