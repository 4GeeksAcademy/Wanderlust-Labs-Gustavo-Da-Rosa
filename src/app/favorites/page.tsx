'use client';

import { useEffect, useMemo, useState } from 'react';
import ExperienceCard from '../../components/ExperienceCard';
import { experiences } from '../../experiences';

const FAVORITES_STORAGE_KEY = 'wanderlust-favorites';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (!storedFavorites) {
        setFavorites([]);
        return;
      }

      try {
        const parsedFavorites = JSON.parse(storedFavorites) as string[];
        setFavorites(Array.isArray(parsedFavorites) ? parsedFavorites : []);
      } catch {
        setFavorites([]);
      }
    };

    loadFavorites();
    window.addEventListener('storage', loadFavorites);

    return () => {
      window.removeEventListener('storage', loadFavorites);
    };
  }, []);

  const favoriteExperiences = useMemo(
    () => experiences.filter((experience) => favorites.includes(experience.id)),
    [favorites],
  );

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
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Favoritos - Wanderlust</h1>

        {favoriteExperiences.length === 0 ? (
          <div className="mt-8 flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center shadow-sm">
            <p className="text-lg font-medium text-gray-600">No tienes experiencias favoritas todavia</p>
            <p className="mt-2 text-sm text-gray-500">
              Marca experiencias con el corazon para verlas aqui.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favoriteExperiences.map((experience) => (
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
