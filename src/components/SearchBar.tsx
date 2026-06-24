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
        placeholder="Buscar experiencias..."
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 sm:text-base"
      />
    </div>
  );
}
