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
    <section className="min-h-screen w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:py-10">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Perfil - Wanderlust</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src="https://ui-avatars.com/api/?name=Alex+Wanderer&background=e2e8f0&color=0f172a&size=160"
              alt="Avatar de Alex Wanderer"
              className="h-24 w-24 rounded-full border border-gray-200 object-cover"
            />

            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-gray-900">Alex Wanderer</h2>
              <p className="text-sm text-gray-600">alex.wanderer@wanderlust.com</p>
              <p className="text-sm text-gray-600">Miembro desde: 12 de marzo de 2024</p>
              <p className="pt-2 text-sm text-gray-500">
                Perfil de viajero activo, con preferencia por experiencias culturales y de aventura.
              </p>
            </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-600">Resumen</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Experiencias favoritas
            </h3>
            <p className="mt-4 text-4xl font-bold text-gray-900">{favoriteIds.length}</p>
            <p className="mt-2 text-sm text-gray-500">
              Total de experiencias marcadas como favoritas.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
