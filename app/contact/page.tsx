"use client";

import { useState } from "react";

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
    value: "Essenti'Elle Formation & Bien-être",
    href: "https://www.facebook.com/profile.php?id=61593057701789",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://nawres1-n8n.hf.space/webhook/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erreur envoi");

      setStatus("success");
      setForm({ name: "", firstname: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Nom
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Prénom
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Votre prénom"
                    value={form.firstname}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Sujet
                <input
                  type="text"
                  name="subject"
                  placeholder="Objet de votre demande"
                  value={form.subject}
                  onChange={handleChange}
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Écrivez votre message..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" className="btn-primary" disabled={status === "loading"}>
                {status === "loading" ? "Envoi en cours..." : "Envoyer"}
              </button>

              {status === "success" && (
                <p className="form-success">Message envoyé avec succès !</p>
              )}
              {status === "error" && (
                <p className="form-error">Une erreur est survenue, réessayez.</p>
              )}
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