import { Heart, LoaderCircle } from "lucide-react";
import type { Puppy } from "../types";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toggleLikedStatus } from "../queries";

type ToggleLikeProps = {
  puppy: Puppy;
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

export function LikeToggle({ puppy, setPuppies }: ToggleLikeProps) {
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);
    const updatedPuppy = await toggleLikedStatus(puppy.id);
    setPuppies((prevPups) => {
      return prevPups.map((existingPuppy) =>
        existingPuppy.id === updatedPuppy.id ? updatedPuppy : existingPuppy,
      );
    });
    setPending(false);
  }

  return (
    <button className="group flex items-center gap-1" onClick={handleClick}>
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            puppy.likedBy.includes(1)
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </button>
  );
}
