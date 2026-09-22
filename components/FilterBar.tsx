"use client";

import type { FormationAudience } from "@/app/formations/data";

type FilterValue = FormationAudience | "all";

type FilterBarProps = {
  activeFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
  count: number;
};

const filters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Toutes" },
  { value: "professionnelles", label: "Pour les professionnelles" },
  { value: "reconversion", label: "En reconversion" },
  { value: "accessible", label: "Accessible à tout le monde" },
];

export default function FilterBar({ activeFilter, onFilterChange, count }: FilterBarProps) {
  return (
    <div className="formation-filters" aria-label="Filtrer les formations par public">
      <div className="formation-filter-pills" role="group" aria-label="Public concerné">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.value}
            className={`formation-filter-pill${activeFilter === filter.value ? " is-active" : ""}`}
            aria-pressed={activeFilter === filter.value}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <span className="formation-filter-count" aria-live="polite">
        {count} formation{count > 1 ? "s" : ""}
      </span>
    </div>
  );
}