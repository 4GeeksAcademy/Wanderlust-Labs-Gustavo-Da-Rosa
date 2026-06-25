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
  const numericId = Number(experience.id.replace(/\D/g, '')) || 0;
  const reviewsCount = 80 + (numericId % 920);

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(experience.id);
  };

  return (
    <article className="flex flex-col bg-white overflow-hidden">
      <div className="relative mb-3">
        <img
          src={experience.image || experience.imageUrl}
          alt={experience.title}
          className="rounded-xl aspect-[4/3] object-cover w-full"
          loading="lazy"
        />

        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          className="absolute right-2.5 top-2.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/75 backdrop-blur-sm transition hover:bg-white"
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

      <div className="flex flex-1 flex-col">
        <p className="text-xs text-gray-500 font-medium tracking-wide">
          {experience.destination} · {experience.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1 leading-snug">
          {experience.title}
        </h3>

        <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
          <span className="text-amber-500">★</span>
          <span>{experience.rating.toFixed(1)}</span>
          <span>({reviewsCount})</span>
        </p>

        <div className="mt-3 flex items-end justify-between">
          <p className="text-xs text-gray-600">Desde <span className="font-bold text-gray-900">USD {experience.price}</span></p>
          <p className="text-xs text-gray-500">por persona</p>
        </div>
      </div>
    </article>
  );
}
