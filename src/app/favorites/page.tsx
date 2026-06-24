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
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 sm:py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Favoritos - Wanderlust
        </h1>
        <p className="text-sm text-slate-600 sm:text-base">
          Aqui veras solo las experiencias guardadas como favoritas.
        </p>
      </header>

      {favoriteExperiences.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-700">
          No tienes experiencias favoritas todavia
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
