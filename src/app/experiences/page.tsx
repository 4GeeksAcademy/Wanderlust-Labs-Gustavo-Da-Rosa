'use client';

import { Suspense } from 'react';
import FilterBar from '../../components/FilterBar';
import SearchBar from '../../components/SearchBar';
import { useExperiencesFilter } from '../../hooks/useExperiencesFilter';

const categories = ['Adventure', 'Culture', 'Food', 'Wellness', 'Nature'] as const;

function ExperiencesContent() {
  const { filteredExperiences, updateFilters, filters } = useExperiencesFilter();

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 sm:py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Experiencias - Wanderlust
        </h1>
        <p className="text-sm text-slate-600 sm:text-base">
          Explora tours y actividades unicas alrededor del mundo.
        </p>
      </header>

      <SearchBar
        value={filters.search ?? ''}
        onChange={(val) =>
          updateFilters({
            search: val,
          })
        }
      />

      <FilterBar
        categories={[...categories]}
        category={filters.category ?? ''}
        destination={filters.destination ?? ''}
        onFilterChange={(newFilters) =>
          updateFilters({
            ...newFilters,
          })
        }
      />

      {filteredExperiences.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-700">
          No se encontraron resultados
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <article
              key={experience.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold leading-6 text-slate-900">
                  {experience.title}
                </h2>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {experience.category}
                </span>
              </div>
              <p className="mb-4 line-clamp-3 text-sm text-slate-600">
                {experience.description}
              </p>
              <div className="space-y-1 text-sm text-slate-700">
                <p>
                  <span className="font-medium">Destino:</span> {experience.destination}
                </p>
                <p>
                  <span className="font-medium">Precio:</span> ${experience.price}
                </p>
                <p>
                  <span className="font-medium">Calificacion:</span> {experience.rating}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<div className="px-6 py-8 text-slate-600">Cargando experiencias...</div>}>
      <ExperiencesContent />
    </Suspense>
  );
}
