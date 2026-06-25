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
    <section className="min-h-screen w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:py-10">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Experiencias - Wanderlust</h1>

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 rounded-full border border-gray-200 bg-white p-4 shadow-sm md:flex-row">
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
          <div className="mt-8 flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center shadow-sm">
            <p className="text-lg font-medium text-gray-600">No se encontraron resultados</p>
            <p className="mt-2 text-sm text-gray-500">Ajusta los filtros para descubrir mas experiencias.</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
