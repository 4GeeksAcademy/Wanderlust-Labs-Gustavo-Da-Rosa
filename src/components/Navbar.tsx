'use client';

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

  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-0 lg:px-8"
        aria-label="Navegacion principal"
      >
        <Link
          href="/"
          className="shrink-0 text-base font-bold tracking-tight text-slate-900 sm:text-lg"
        >
          Explorador Wanderlust
        </Link>

        <div className="w-full overflow-x-auto sm:w-auto">
          <ul className="flex min-w-max items-center gap-4 pr-1 sm:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap border-b-2 pb-1 text-sm transition-colors sm:text-base ${
                      isActive
                        ? 'border-indigo-600 text-indigo-600 font-semibold'
                        : 'border-transparent text-gray-500 hover:text-gray-900'
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
      </nav>
    </header>
  );
}
