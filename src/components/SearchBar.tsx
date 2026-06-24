'use client';

type SearchBarProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full">
      <label htmlFor="search-experiences" className="sr-only">
        Buscar experiencias
      </label>
      <div className="group relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
        >
          🔎
        </span>
        <input
          id="search-experiences"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar experiencias por nombre..."
          className="w-full rounded-2xl border border-slate-200 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 sm:text-base"
        />
      </div>
    </div>
  );
}
