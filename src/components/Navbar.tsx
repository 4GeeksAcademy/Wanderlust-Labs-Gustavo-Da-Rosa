'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  href: '/experiences' | '/favorites' | '/profile';
  label: string;
};

const navItems: NavItem[] = [
  { href: '/experiences', label: 'Experiencias' },
  { href: '/favorites', label: 'Favoritos' },
  { href: '/profile', label: 'Perfil' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="glass-nav relative border-b border-outline/70 bg-surface/80 shadow-sm">
      <nav
        className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10"
        aria-label="Navegacion principal"
      >
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-primary sm:text-2xl">
          Wanderlust
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-600 transition hover:bg-surface-soft hover:text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Abrir menu de navegacion"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    isActive
                      ? 'border-b-2 border-secondary pb-1 text-secondary font-semibold'
                      : 'text-slate-600 transition-colors hover:text-primary'
                  }
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute inset-x-0 top-full border-b border-outline/70 bg-surface px-4 pb-4 pt-2 shadow-sm md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm ${
                      isActive
                        ? 'bg-secondary/10 text-secondary font-semibold'
                        : 'text-slate-700 transition-colors hover:bg-surface-soft hover:text-primary'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
