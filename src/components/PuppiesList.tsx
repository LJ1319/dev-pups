import type { Dispatch, SetStateAction } from "react";
import type { Puppy } from "../types";
import { PuppyCard } from "./PuppyCard";

type PuppiesListProps = {
  puppies: Puppy[];
  liked: Puppy["id"][];
  setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
};

export function PuppiesList({ puppies, liked, setLiked }: PuppiesListProps) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies.map((puppy) => (
        <PuppyCard
          key={puppy.id}
          puppy={puppy}
          liked={liked}
          setLiked={setLiked}
        />
      ))}
    </ul>
  );
}
