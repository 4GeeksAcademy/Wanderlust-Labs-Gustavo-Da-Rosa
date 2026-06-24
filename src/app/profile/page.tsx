'use client';

import { useEffect, useState } from 'react';

const FAVORITES_STORAGE_KEY = 'wanderlust-favorites';
const FALLBACK_FAVORITES = ['exp-001', 'exp-014', 'exp-037'];

export default function ProfilePage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(FALLBACK_FAVORITES);

  useEffect(() => {
    const syncFavorites = () => {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);

      if (!storedFavorites) {
        setFavoriteIds(FALLBACK_FAVORITES);
        return;
      }

      try {
        const parsedFavorites = JSON.parse(storedFavorites) as string[];
        if (Array.isArray(parsedFavorites) && parsedFavorites.length > 0) {
          setFavoriteIds(parsedFavorites);
        } else {
          setFavoriteIds(FALLBACK_FAVORITES);
        }
      } catch {
        setFavoriteIds(FALLBACK_FAVORITES);
      }
    };

    syncFavorites();
    window.addEventListener('storage', syncFavorites);

    return () => {
      window.removeEventListener('storage', syncFavorites);
    };
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-10">
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mi Perfil
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Gestiona tu cuenta y revisa tu actividad en Wanderlust.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src="https://ui-avatars.com/api/?name=Alex+Wanderer&background=e2e8f0&color=0f172a&size=160"
              alt="Avatar de Alex Wanderer"
              className="h-24 w-24 rounded-full border border-slate-200 object-cover"
            />

            <div className="space-y-1">
              <h2 className="text-2xl font-semibold text-slate-900">Alex Wanderer</h2>
              <p className="text-sm text-slate-600">alex.wanderer@wanderlust.com</p>
              <p className="text-sm text-slate-600">Miembro desde: 12 de marzo de 2024</p>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm">
          <p className="text-sm font-medium text-indigo-700">Resumen</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Experiencias favoritas
          </h3>
          <p className="mt-4 text-4xl font-bold text-indigo-600">{favoriteIds.length}</p>
          <p className="mt-2 text-sm text-slate-600">
            Total de experiencias marcadas como favoritas.
          </p>
        </article>
      </div>
    </section>
  );
}
