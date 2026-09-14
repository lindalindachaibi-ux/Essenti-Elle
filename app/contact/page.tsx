const contactLinks = [
  {
    label: "WhatsApp",
    value: "+216 23 163 109",
    href: "https://wa.me/21623163109",
  },
  {
    label: "Instagram",
    value: "@essentielle_formation_bienetre",
    href: "https://www.instagram.com/essentielle_formation_bienetre/",
  },
  {
    label: "Facebook",
    value: "Essenti'Elle",
    href: "https://www.facebook.com/profile.php?id=61593057701789",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="wrap contact-hero-inner">
          <div>
            <span className="label">Contact</span>
            <h1>Une question ? Nous sommes là pour vous accompagner.</h1>
            <p>
              Vous souhaitez renseigner une formation, réserver un soin, ou obtenir
              plus d’informations ? Contactez-nous facilement.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="wrap contact-grid">
          <div className="contact-card contact-form-card">
            <h2>Envoyez-nous un message</h2>
            <form className="contact-form">
              <div className="field-row">
                <label>
                  Nom
                  <input type="text" name="name" placeholder="Votre nom" />
                </label>
                <label>
                  Prénom
                  <input type="text" name="firstname" placeholder="Votre prénom" />
                </label>
              </div>

              <label>
                Email
                <input type="email" name="email" placeholder="Votre email" />
              </label>

              <label>
                Sujet
                <input type="text" name="subject" placeholder="Objet de votre demande" />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Écrivez votre message..."
                  rows={5}
                />
              </label>

              <button type="submit" className="btn-primary">
                Envoyer
              </button>
            </form>
          </div>

          <div className="contact-card contact-info-card">
            <h2>Nos coordonnées</h2>

            <div className="contact-list">
              {contactLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>

            <div className="hours-box">
              <h3>Horaires</h3>
              <p>Lundi au Samedi</p>
              <p>9:00 — 18:00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
