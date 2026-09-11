"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formations } from "../formations/data";

function ReservationForm() {
  const searchParams = useSearchParams();
  const selectedFormationFromUrl = searchParams.get("formation");

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    formation: selectedFormationFromUrl || formations[0]?.slug || "",
    modalite: "Présentiel",
    participants: "1",
    message: "",
  });

  useEffect(() => {
    const nextFormation =
      formations.find((formation) => formation.slug === selectedFormationFromUrl) ||
      formations[0];

    if (nextFormation) {
      setFormData((prev) => ({
        ...prev,
        formation: nextFormation.slug,
      }));
    }
  }, [selectedFormationFromUrl]);

  const selectedFormation =
    formations.find((formation) => formation.slug === formData.formation) ||
    formations[0];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert(
      "Votre demande de réservation a bien été enregistrée. Vous pouvez maintenant la relier à votre outil de contact ou à votre email de réception.",
    );
  };

  return (
    <main className="reservation-page">
      <section className="reservation-hero">
        <div className="wrap reservation-header">
          <span className="label">Réservation</span>
          <h1>Demander votre programme</h1>
          <p>
            Renseignez vos informations pour recevoir le programme de la formation
            qui vous intéresse et être recontactée rapidement.
          </p>
        </div>
      </section>

      <section className="wrap reservation-layout">
        <aside className="reservation-panel">
          <span className="label">Formation sélectionnée</span>
          <h2>{selectedFormation?.title ?? "Formation"}</h2>

          <div className="panel-meta">
            <span>{selectedFormation?.duration ?? "3 jours"}</span>
            <span>{selectedFormation?.price ?? "990 DT"}</span>
            <span>{selectedFormation?.date || "À confirmer"}</span>
          </div>

          <p className="panel-summary">{selectedFormation?.summary}</p>

          <ul className="mini-check">
            {selectedFormation?.goals.slice(0, 4).map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </aside>

        <div className="reservation-form-panel">
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <div className="field">
                <label htmlFor="nom">Nom</label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="prenom">Prénom</label>
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                />
              </div>
            </div>

            <div className="field-grid">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="telephone">Téléphone</label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+216 ..."
                  required
                />
              </div>
            </div>

            <div className="field-grid">
              <div className="field">
                <label htmlFor="formation">Formation</label>
                <select
                  id="formation"
                  name="formation"
                  value={formData.formation}
                  onChange={handleChange}
                >
                  {formations.map((formation) => (
                    <option key={formation.slug} value={formation.slug}>
                      {formation.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="modalite">Modalité</label>
                <select
                  id="modalite"
                  name="modalite"
                  value="Présentiel"
                  onChange={handleChange}
                  disabled
                >
                  <option>Présentiel</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="participants">Nombre de personnes</label>
              <input
                id="participants"
                name="participants"
                type="number"
                min="1"
                max="20"
                value={formData.participants}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre besoin, votre disponibilités ou votre question..."
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Envoyer ma demande
              </button>
              <Link href="/formations" className="btn-outline">
                Retour aux formations
              </Link>
            </div>

            <p className="form-note">
              Votre demande sera ensuite reliée à votre email, WhatsApp ou CRM selon
              votre configuration.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default function ReservationPage() {
  return (
    <Suspense
      fallback={
        <main className="reservation-page">
          <section className="reservation-hero">
            <div className="wrap reservation-header">
              <span className="label">Réservation</span>
              <h1>Chargement...</h1>
            </div>
          </section>
        </main>
      }
    >
      <ReservationForm />
    </Suspense>
  );
}
