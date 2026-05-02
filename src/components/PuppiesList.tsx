import type { Puppy } from "../types";
import { PuppyCard } from "./PuppyCard";

type PuppiesListProps = {
  puppies: Puppy[];
  searchQuery: string;
};

export function PuppiesList({ puppies, searchQuery }: PuppiesListProps) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies
        .filter((puppy) =>
          puppy.vibe.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
    </ul>
  );
}
