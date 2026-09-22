import type { Formation } from "@/app/formations/data";
import FormationCard from "@/components/FormationCard";

type CategorySectionProps = {
  title: string;
  formations: Formation[];
};

export default function CategorySection({ title, formations }: CategorySectionProps) {
  return (
    <section className="formation-category">
      <div className="formation-category-heading">
        <h2>{title}</h2>
        <span aria-hidden="true" />
      </div>
      <div className="formations-grid">
        {formations.map((formation) => (
          <FormationCard formation={formation} key={formation.slug} />
        ))}
      </div>
    </section>
  );
}