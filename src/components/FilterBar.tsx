'use client';

type FilterBarProps = {
  categories: Array<'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature'>;
  category: string;
  destination: string;
  onFilterChange: (filters: { category?: string; destination?: string }) => void;
};

export default function FilterBar({
  categories,
  category,
  destination,
  onFilterChange,
}: FilterBarProps) {
  const categoryLabels: Record<FilterBarProps['categories'][number], string> = {
    Adventure: 'Aventura',
    Culture: 'Cultura',
    Food: 'Gastronomia',
    Wellness: 'Bienestar',
    Nature: 'Naturaleza',
  };

  return (
    <section
      className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
      aria-label="Filtros de experiencias"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="category-filter" className="text-sm font-medium text-gray-700">
            Categoria
          </label>
          <select
            id="category-filter"
            value={category}
            onChange={(event) =>
              onFilterChange({
                category: event.target.value,
                destination,
              })
            }
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          >
            <option value="">Todas las categorias</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {categoryLabels[item]}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="destination-filter" className="text-sm font-medium text-gray-700">
            Destino
          </label>
          <input
            id="destination-filter"
            type="text"
            value={destination}
            onChange={(event) =>
              onFilterChange({
                category,
                destination: event.target.value,
              })
            }
            placeholder="Ciudad o pais"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>
    </section>
  );
}
