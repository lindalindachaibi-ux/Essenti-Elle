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
    session: "",
    participants: "1",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const selectedFormation =
    formations.find((formation) => formation.slug === formData.formation) ||
    formations[0];

  useEffect(() => {
    const nextFormation =
      formations.find((formation) => formation.slug === selectedFormationFromUrl) ||
      formations[0];

    if (nextFormation) {
      setFormData((prev) => ({
        ...prev,
        formation: nextFormation.slug,
        session: nextFormation.sessions[0]?.slug || "",
      }));
    }
  }, [selectedFormationFromUrl]);

  const selectedSession = selectedFormation?.sessions.find(
    (session) => session.slug === formData.session,
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if (name === "formation") {
      const nextFormation = formations.find((formation) => formation.slug === value);
      setFormData((prev) => ({
        ...prev,
        formation: value,
        session: nextFormation?.sessions[0]?.slug || "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://nawres1-n8n.hf.space/webhook/Formulaire-Réservation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date: new Date().toLocaleDateString("fr-FR"),
            nom: formData.nom,
            prenom: formData.prenom,
            email: formData.email,
            telephone: formData.telephone,
            formation: selectedFormation?.title ?? formData.formation,
            prix: selectedFormation?.price ?? "",
            modalite: formData.modalite,
            session: selectedSession?.label ?? "",
            dateSession: selectedSession?.dates ?? "",
            dateDebut: selectedSession?.startDate ?? "",
            dateFin: selectedSession?.endDate ?? "",
            participants: formData.participants,
            message: formData.message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Échec de l'envoi");
      }

      setStatus("success");
      setFormData((prev) => ({
        ...prev,
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        participants: "1",
        message: "",
      }));
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
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
            <span>{selectedSession?.dates ?? "Dates à venir"}</span>
          </div>

          <p className="panel-summary">{selectedFormation?.summary}</p>

          <ul className="mini-check">
            {selectedFormation?.goals.slice(0, 4).map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </aside>

        <div className="reservation-form-panel">
          {status === "success" ? (
            <div className="form-success">
              <h3>Demande envoyée ✔</h3>
              <p>
                Votre demande de réservation a bien été enregistrée. Vous serez
                recontactée rapidement par email ou téléphone.
              </p>
              <button
                type="button"
                className="btn-outline"
                onClick={() => setStatus("idle")}
              >
                Faire une nouvelle demande
              </button>
            </div>
          ) : (
            <form className="reservation-form" onSubmit={handleSubmit}>
              {status === "error" && (
                <div className="form-error">
                  Une erreur est survenue, merci de réessayer.
                </div>
              )}

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
                <label htmlFor="session">Session</label>
                {selectedFormation && selectedFormation.sessions.length > 0 ? (
                  <select
                    id="session"
                    name="session"
                    value={formData.session}
                    onChange={handleChange}
                    required
                  >
                    {selectedFormation.sessions.map((session) => (
                      <option key={session.slug} value={session.slug}>
                        {session.label} ({session.dates})
                      </option>
                    ))}
                  </select>
                ) : (
                  <select id="session" name="session" disabled value="">
                    <option value="">Dates à venir — contactez-nous</option>
                  </select>
                )}
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
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
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
          )}
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