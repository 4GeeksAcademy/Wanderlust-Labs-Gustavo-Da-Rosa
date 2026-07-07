import Link from 'next/link';
import { notFound } from 'next/navigation';
import { experiences } from '../../../data/experiences';

type ExperienceDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <Link
        href="/experiences"
        className="inline-flex items-center text-sm font-medium text-slate-600 transition hover:text-primary"
      >
        Volver a experiencias
      </Link>

      <article className="card-surface mt-5 overflow-hidden rounded-2xl">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-72 w-full object-cover md:h-[28rem]"
        />

        <div className="space-y-4 p-5 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">
            {experience.category} · {experience.destination}
          </p>

          <h1 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            {experience.title}
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {experience.description}
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            <div className="rounded-xl border border-outline/70 bg-surface-soft p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Precio</p>
              <p className="mt-2 text-2xl font-bold text-primary">USD {experience.price}</p>
              <p className="text-sm text-slate-600">por persona</p>
            </div>

            <div className="rounded-xl border border-outline/70 bg-surface-soft p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Valoracion</p>
              <p className="mt-2 text-2xl font-bold text-primary">{experience.rating.toFixed(1)} / 5</p>
              <p className="text-sm text-slate-600">segun viajeros recientes</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
