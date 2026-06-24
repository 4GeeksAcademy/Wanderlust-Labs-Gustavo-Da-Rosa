'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { experiences } from '../data/experiences';

export type ExperienceFilters = {
  search?: string;
  category?: string;
  destination?: string;
};

export function useExperiencesFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilters: ExperienceFilters = {
    search: searchParams.get('search') ?? '',
    category: searchParams.get('category') ?? '',
    destination: searchParams.get('destination') ?? '',
  };

  const filteredExperiences = useMemo(() => {
    return experiences.filter((experience) => {
      if (
        activeFilters.search &&
        !new RegExp(activeFilters.search, 'i').test(experience.title)
      ) {
        return false;
      }

      if (
        activeFilters.category &&
        experience.category !== activeFilters.category
      ) {
        return false;
      }

      if (
        activeFilters.destination &&
        !experience.destination
          .toLowerCase()
          .includes(activeFilters.destination.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [activeFilters.search, activeFilters.category, activeFilters.destination]);

  const updateFilters = (newFilters: ExperienceFilters) => {
    const params = new URLSearchParams(searchParams.toString());

    (Object.entries(newFilters) as [keyof ExperienceFilters, string | undefined][]).forEach(
      ([key, value]) => {
        const normalizedValue = value?.trim() ?? '';

        if (normalizedValue) {
          params.set(key, normalizedValue);
        } else {
          params.delete(key);
        }
      },
    );

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return {
    filteredExperiences,
    updateFilters,
    filters: activeFilters,
  };
}
