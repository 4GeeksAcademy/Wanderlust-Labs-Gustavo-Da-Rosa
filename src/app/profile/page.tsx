'use client';

import { useFavorites } from '../../components/FavoritesProvider';

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <section className="min-h-screen w-full bg-background">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <h1 className="font-display mb-6 text-3xl font-semibold text-primary sm:text-4xl">Perfil</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="card-surface rounded-2xl p-6 lg:col-span-2 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src="https://ui-avatars.com/api/?name=Alex+Wanderer&background=e2e8f0&color=0f172a&size=160"
              alt="Avatar de Alex Wanderer"
              className="h-24 w-24 rounded-full border border-outline/70 object-cover"
            />

            <div className="space-y-1">
              <h2 className="font-display text-2xl font-semibold text-primary">Alex Wanderer</h2>
              <p className="text-sm text-slate-600">alex.wanderer@wanderlust.com</p>
              <p className="text-sm text-slate-600">Miembro desde: 12 de marzo de 2024</p>
              <p className="pt-2 text-sm text-slate-500">
                Perfil de viajero activo, con preferencia por experiencias culturales y de aventura.
              </p>
            </div>
            </div>
          </article>

          <article className="card-surface rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">Resumen</p>
            <h3 className="font-display mt-2 text-xl font-semibold text-primary">
              Experiencias favoritas
            </h3>
            <p className="mt-4 text-5xl font-bold text-secondary">{favoriteIds.length}</p>
            <p className="mt-2 text-sm text-slate-500">
              Total de experiencias marcadas como favoritas.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
