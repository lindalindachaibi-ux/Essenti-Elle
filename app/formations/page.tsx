import Link from "next/link";
import { formations } from "./data";

export default function FormationsPage() {
  return (
    <main className="formations-shell">
      <section className="formation-list-hero">
        <div className="wrap">
          <span className="label">Nos formations</span>
          <h1>Des parcours pensés pour votre équilibre et votre avenir</h1>
          <p>
            Des programmes professionnels avec des professionelles  et inspirants pour accompagner les
            femmes dans leur développement personnel, leur pratique bien-être et
            leur activité professionnelle.
          </p>
        </div>
      </section>

      <section className="formation-list-section">
        <div className="wrap">
          <div className="cards-grid formations-grid">
            {formations.map((formation) => (
              <article className="card reveal" key={formation.slug}>
                <div className="card-media reveal-img">
                  <img src={formation.image} alt={formation.title} />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    {formation.duration} · {formation.price}
                  </div>
                  <h4>{formation.title}</h4>
                  <div className="card-date">{formation.date}</div>
                  <p className="card-desc">{formation.description}</p>
                  <div className="card-action-box">
                    <Link href={`/formations/${formation.slug}`} className="card-button">
                      Découvrir la formation
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
