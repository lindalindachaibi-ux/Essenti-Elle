import Image from "next/image";
import Link from "next/link";
import type { Formation } from "@/app/formations/data";

type FormationCardProps = {
  formation: Formation;
};

export default function FormationCard({ formation }: FormationCardProps) {
  return (
    <article
      className={`formation-card${
        formation.slug === "changement-de-perspective" ? " formation-card--compact" : ""
      }`}
    >
      <div className="formation-card-media">
        <Image
          src={formation.image}
          alt={formation.title}
          width={900}
          height={675}
          sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <span className="formation-card-meta">
          {formation.price} <span aria-hidden="true">·</span> {formation.duration}
        </span>
      </div>
      <div className="formation-card-body">
        <p className="formation-card-label">{formation.label}</p>
        <h3>{formation.title}</h3>
        <p className="formation-card-description">{formation.description}</p>
        <div className="formation-card-footer">
          <Link
            href={`/reservation?formation=${formation.slug}`}
            className="formation-program-link"
          >
            Programme
          </Link>
          <Link href={`/formations/${formation.slug}`} className="formation-discover-link">
            Découvrir la formation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}