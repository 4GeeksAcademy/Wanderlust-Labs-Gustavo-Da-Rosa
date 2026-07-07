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
      <input
        id="search-experiences"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar experiencias"
        className="w-full rounded-xl border border-outline/80 bg-surface-soft px-4 py-3 text-sm text-slate-800 shadow-sm transition hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/25"
      />
    </div>
  );
}
