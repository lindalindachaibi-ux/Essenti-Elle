import FormationCatalog from "@/components/FormationCatalog";

export default function FormationsPage() {
  return (
    <main className="formations-shell">
      <section className="formation-list-hero">
        <div className="wrap">
          <span className="formation-list-kicker">Nos formations</span>
          <h1>Le savoir-faire au cœur du bien-être</h1>
          <p>
            Des parcours professionnels et accessibles pour développer vos compétences,
            accompagner les autres et construire une pratique qui vous ressemble.
          </p>
        </div>
      </section>
<section className="formation-list-section">
  <div className="wrap">
    <FormationCatalog />
  </div>
</section>
      
    </main>
  );
}
