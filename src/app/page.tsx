import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-background">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/45 via-primary/20 to-background" />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1280px] items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="max-w-3xl rounded-3xl border border-white/20 bg-white/15 p-6 text-white shadow-xl backdrop-blur-sm sm:p-10">
          <p className="mb-5 inline-flex rounded-full border border-secondary/40 bg-secondary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-sm">
            Tu proxima aventura empieza aqui
          </p>

          <h1 className="font-display text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Descubre experiencias unicas por todo el mundo y convierte cada viaje en una historia inolvidable
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Explora planes autenticos, actividades sorprendentes y destinos memorables elegidos para viajeros que buscan algo mas que turismo tradicional.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/30 sm:px-10 sm:text-lg"
            >
              Explorar experiencias
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
