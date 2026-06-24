'use client';

import { Suspense, useEffect, useState } from 'react';
import ExperienceCard from '../../components/ExperienceCard';
import FilterBar from '../../components/FilterBar';
import SearchBar from '../../components/SearchBar';
import { useExperiencesFilter } from '../../hooks/useExperiencesFilter';

const categories = ['Adventure', 'Culture', 'Food', 'Wellness', 'Nature'] as const;
const FAVORITES_STORAGE_KEY = 'wanderlust-favorites';

function ExperiencesContent() {
  const { filteredExperiences, updateFilters, filters } = useExperiencesFilter();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!storedFavorites) {
      return;
    }

    try {
      const parsedFavorites = JSON.parse(storedFavorites) as string[];
      if (Array.isArray(parsedFavorites)) {
        setFavorites(parsedFavorites);
      }
    } catch {
      setFavorites([]);
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const nextFavorites = prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id];

      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(nextFavorites));
      return nextFavorites;
    });
  };

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

      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-stretch">
        <div className="w-full lg:w-5/12">
          <SearchBar
            value={filters.search ?? ''}
            onChange={(val) =>
              updateFilters({
                search: val,
              })
            }
          />
        </div>

        <div className="w-full lg:w-7/12">
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
        <div className="flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
          <span className="mb-3 text-4xl text-slate-400" aria-hidden="true">
            ☹
          </span>
          <p className="text-xl font-semibold tracking-tight text-slate-600">
            No se encontraron resultados
          </p>
          <p className="mt-2 max-w-md text-sm text-slate-500 sm:text-base">
            Prueba con otra busqueda o ajusta los filtros para descubrir mas opciones.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favorites.includes(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
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
