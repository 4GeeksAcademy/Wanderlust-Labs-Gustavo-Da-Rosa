'use client';

import { Suspense } from 'react';
import ExperienceCard from '../../components/ExperienceCard';
import { useFavorites } from '../../components/FavoritesProvider';
import FilterBar from '../../components/FilterBar';
import SearchBar from '../../components/SearchBar';
import { useExperiencesFilter } from '../../hooks/useExperiencesFilter';

const categories = ['Adventure', 'Culture', 'Food', 'Wellness', 'Nature'] as const;

function ExperiencesContent() {
  const { filteredExperiences, updateFilters, filters } = useExperiencesFilter();
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <section className="min-h-screen w-full bg-background">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <h1 className="font-display mb-2 text-3xl font-semibold text-primary sm:text-4xl">Explorador de experiencias</h1>
        <p className="mb-7 text-sm text-slate-600 sm:text-base">Filtra por categoria, destino o titulo para encontrar tu proxima aventura.</p>

        <div className="card-surface mx-auto flex w-full max-w-5xl flex-col items-center gap-3 rounded-2xl p-3 sm:p-4 md:flex-row">
          <div className="w-full md:flex-1">
          <SearchBar
            value={filters.search ?? ''}
            onChange={(val) =>
              updateFilters({
                search: val,
              })
            }
          />
          </div>

          <div className="w-full md:flex-1">
          <FilterBar
            categories={[...categories]}
            category={filters.category ?? ''}
            destination={filters.destination ?? ''}
            onCategoryChange={(category) =>
              updateFilters({
                category,
              })
            }
            onDestinationChange={(destination) =>
              updateFilters({
                destination,
              })
            }
          />
          </div>
        </div>

        {filteredExperiences.length === 0 ? (
          <div className="card-surface mt-8 flex min-h-[240px] flex-col items-center justify-center rounded-2xl px-6 py-10 text-center">
            <p className="font-display text-2xl font-semibold text-primary">No se encontraron resultados</p>
            <p className="mt-2 text-sm text-slate-500">Ajusta los filtros para descubrir mas experiencias.</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isFavorite={isFavorite(experience.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
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
