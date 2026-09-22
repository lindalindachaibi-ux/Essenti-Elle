"use client";

import { useState } from "react";
import { formations, getFormationAudiences, type FormationAudience } from "@/app/formations/data";
import CategorySection from "@/components/CategorySection";
import FeaturedStrip from "@/components/FeaturedStrip";
import FilterBar from "@/components/FilterBar";

export default function FormationCatalog() {
  const [activeFilter, setActiveFilter] = useState<FormationAudience | "all">("all");
  const visibleFormations = formations.filter(
    (formation) =>
      activeFilter === "all" || getFormationAudiences(formation).includes(activeFilter),
  );
  const groupedFormations = visibleFormations.reduce<Record<string, typeof formations>>(
    (groups, formation) => {
      (groups[formation.category] ??= []).push(formation);
      return groups;
    },
    {},
  );
  const featuredFormation = formations.find(
    (formation) => formation.slug === "changement-de-perspective",
  );

  return (
    <>
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        count={visibleFormations.length}
      />

      {visibleFormations.length > 0 ? (
        <div className="formation-category-list">
          {Object.entries(groupedFormations).map(([category, categoryFormations], index) => (
            <div key={category}>
              <CategorySection title={category} formations={categoryFormations} />
              {index === 2 && featuredFormation ? (
                <FeaturedStrip formation={featuredFormation} />
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p className="formation-empty">Aucune formation ne correspond à ce public.</p>
      )}
    </>
  );
}