import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formations, getFormationBySlug } from "../data";

export function generateStaticParams() {
  return formations.map((formation) => ({ slug: formation.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const formation = getFormationBySlug(slug);

    if (!formation) {
      return { title: "Formation introuvable" };
    }

    return {
      title: `${formation.title} | Essenti'Elle`,
      description: formation.description,
    };
  });
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);

  if (!formation) {
    notFound();
  }

  return (
    <main className="formation-detail-page">
      <section className="formation-hero">
        <div className="wrap formation-hero-inner">
          <div className="formation-copy">
            <span className="label">Formation</span>
            <h1>{formation.title}</h1>
            <p className="formation-tag">{formation.label}</p>
            <p className="formation-summary">{formation.summary}</p>
            <div className="formation-meta-row">
              <span>{formation.duration}</span>
              <span>{formation.price}</span>
            </div>
            <div className="formation-actions">
              <Link
                href={`/reservation?formation=${formation.slug}`}
                className="btn-primary"
              >
                Demander le programme
              </Link>
              <Link href="/formations" className="btn-outline">
                Retour aux formations
              </Link>
            </div>
          </div>

          <div className="formation-visual">
            <img src={formation.image} alt={formation.title} />
          </div>
        </div>
      </section>

      <section className="formation-content">
        <div className="wrap two-col">
          <div className="detail-panel">
            <h2>À propos de cette formation</h2>
            <p>{formation.description}</p>
          </div>

          <div className="detail-panel accent-panel">
            <h3>Ce que vous allez acquérir</h3>
            <ul className="check-list">
              {formation.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="format-section" id="contact">
        <div className="wrap curtain-content">
          <div className="section-head">
            <span className="label">Format de la formation</span>
            <h2>Une expérience claire, pratique et adaptée à votre rythme</h2>
          </div>

          <div className="format-grid">
            <div className="format-col">
              <div className="icon">⌂</div>
              <h3>Présentiel</h3>
              <ul>
                {formation.format.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="format-col">
              <div className="icon">◷</div>
              <h3>En ligne</h3>
              <ul>
                <li>Cours disponibles 24h/24</li>
                <li>Quiz et validations entre modules</li>
                <li>Test final pour la certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}