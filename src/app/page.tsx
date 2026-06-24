import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 via-white to-indigo-100" />
      <div className="absolute left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center px-6 py-16 sm:py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700 sm:text-sm">
            Tu proxima aventura empieza aqui
          </p>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Descubre experiencias unicas por todo el mundo y convierte cada viaje en una historia inolvidable
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Explora planes autenticos, actividades sorprendentes y destinos memorables elegidos para viajeros que buscan algo mas que turismo tradicional.
          </p>

          <div className="mt-9">
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300 sm:px-10 sm:py-4 sm:text-lg"
            >
              Explorar experiencias
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
