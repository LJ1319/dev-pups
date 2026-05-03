import type { Dispatch, SetStateAction } from "react";
import type { Puppy } from "../types";
import { PuppyCard } from "./PuppyCard";

type PuppiesListProps = {
  puppies: Puppy[];
  searchQuery: string;
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

export function PuppiesList({
  puppies,
  searchQuery,
  setPuppies,
}: PuppiesListProps) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies
        .filter((puppy) =>
          puppy.trait.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} setPuppies={setPuppies} />
        ))}
    </ul>
  );
}
