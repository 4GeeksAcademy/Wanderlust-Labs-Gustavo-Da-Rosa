'use client';

import type { MouseEvent } from 'react';
import type { Experience } from '../experiences';

type ExperienceCardProps = {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(experience.id);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-56 w-full rounded-t-2xl object-cover"
          loading="lazy"
        />

        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-5 w-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'fill-none text-slate-700'
            }`}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21s-7.2-4.35-9.3-8.38C1.2 9.6 2.4 6 6 6c2.08 0 3.42 1.13 4 2.1C10.58 7.13 11.92 6 14 6c3.6 0 4.8 3.6 3.3 6.62C19.2 16.65 12 21 12 21z" />
          </svg>
        </button>
      </div>

      <div className="space-y-2 p-4">
        <p className="text-sm font-medium text-slate-500">{experience.destination}</p>
        <h3 className="text-lg font-semibold leading-tight text-slate-900">{experience.title}</h3>

        <div className="flex items-center justify-between">
          <p className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
            <span className="text-amber-500">★</span>
            {experience.rating.toFixed(1)}
          </p>
          <p className="text-base font-bold text-slate-900">${experience.price}</p>
        </div>
      </div>
    </article>
  );
}
