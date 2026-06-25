'use client';

type FilterBarProps = {
  categories: Array<'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature'>;
  category: string;
  destination: string;
  onCategoryChange: (category: string) => void;
  onDestinationChange: (destination: string) => void;
};

export default function FilterBar({
  categories,
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <section className="w-full" aria-label="Filtros de experiencias">
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor="category-filter" className="sr-only">
          Categoria
        </label>
        <select
          id="category-filter"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-700 shadow-sm transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Todas las categorias</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="destination-filter" className="sr-only">
          Destino
        </label>
        <input
          id="destination-filter"
          type="text"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          placeholder="Destino"
          className="w-full rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-700 shadow-sm transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </section>
  );
}
