'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import type { Experience } from '../data/experiences';

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
    <article className="card-surface group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/experiences/${experience.id}`} className="group block">
        <div className="relative overflow-hidden">
          <img
            src={experience.image || experience.imageUrl}
            alt={experience.title}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <button
            type="button"
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 shadow-sm backdrop-blur-md transition hover:bg-white"
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-5 w-5 ${
                isFavorite ? 'fill-secondary text-secondary' : 'fill-none text-slate-700'
              }`}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21s-7.2-4.35-9.3-8.38C1.2 9.6 2.4 6 6 6c2.08 0 3.42 1.13 4 2.1C10.58 7.13 11.92 6 14 6c3.6 0 4.8 3.6 3.3 6.62C19.2 16.65 12 21 12 21z" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
            {experience.destination} · {experience.category}
          </p>
          <h3 className="font-display mt-2 line-clamp-2 text-lg font-semibold leading-tight text-primary transition group-hover:text-primary/80">
            {experience.title}
          </h3>

          <p className="mt-2 flex items-center gap-1 text-sm text-slate-600">
            <span className="text-secondary">★</span>
            <span>{experience.rating.toFixed(1)}</span>
            <span>({reviewsCount})</span>
          </p>

          <div className="mt-4 flex items-end justify-between border-t border-outline/60 pt-3">
            <p className="text-sm text-slate-600">Desde <span className="text-lg font-bold text-primary">USD {experience.price}</span></p>
            <p className="text-xs text-slate-500">por persona</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
