import Image from "next/image";
import Link from "next/link";
import type { Formation } from "@/app/formations/data";

type FeaturedStripProps = {
  formation: Formation;
};

export default function FeaturedStrip({ formation }: FeaturedStripProps) {
  return (
    <aside className="formation-featured-strip">
      <div className="formation-featured-image">
        <Image
          src={formation.image}
          alt=""
          width={900}
          height={675}
          sizes="(max-width: 760px) 100vw, 35vw"
        />
      </div>
      <div className="formation-featured-copy">
        <p className="formation-featured-label">Formation phare</p>
        <h2>{formation.title}</h2>
        <p>{formation.summary}</p>
        <Link href={`/formations/${formation.slug}`} className="formation-featured-link">
          Découvrir la formation <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}