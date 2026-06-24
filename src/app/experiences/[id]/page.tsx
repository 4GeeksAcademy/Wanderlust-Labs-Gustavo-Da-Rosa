type ExperienceDetailPageProps = {
  params: {
    id: string;
  };
};

export default function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Detalle de Experiencia - {params.id}
      </h1>
    </main>
  );
}
