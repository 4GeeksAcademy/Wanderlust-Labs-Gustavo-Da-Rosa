'use client';

import { useMemo } from 'react';
import ExperienceCard from '../../components/ExperienceCard';
import { useFavorites } from '../../components/FavoritesProvider';
import { experiences } from '../../data/experiences';

export default function FavoritesPage() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();

  const favoriteExperiences = useMemo(
    () => experiences.filter((experience) => favoriteIds.includes(experience.id)),
    [favoriteIds],
  );

  return (
    <section className="min-h-screen w-full bg-background">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <h1 className="font-display mb-2 text-3xl font-semibold text-primary sm:text-4xl">Tus favoritos</h1>
        <p className="mb-7 text-sm text-slate-600 sm:text-base">Experiencias que marcaste para no perderlas de vista.</p>

        {favoriteExperiences.length === 0 ? (
          <div className="card-surface mt-8 flex min-h-[220px] flex-col items-center justify-center rounded-2xl px-6 py-10 text-center">
            <p className="font-display text-2xl font-semibold text-primary">No tienes experiencias favoritas todavia</p>
            <p className="mt-2 text-sm text-slate-500">
              Marca experiencias con el corazon para verlas aqui.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteExperiences.map((experience) => (
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
