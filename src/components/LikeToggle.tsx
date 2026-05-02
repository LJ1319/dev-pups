import { type Dispatch, type SetStateAction } from "react";
import { Heart } from "lucide-react";
import type { Puppy } from "../types";

type ToggleLikeProps = {
  id: Puppy["id"];
  liked: Puppy["id"][];
  setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
};

export function LikeToggle({ id, liked, setLiked }: ToggleLikeProps) {
  function handleClick() {
    if (liked.includes(id)) {
      setLiked(liked.filter((pupId) => pupId !== id));
    } else {
      setLiked([...liked, id]);
    }
  }

  return (
    <button className="group flex items-center gap-1" onClick={handleClick}>
      <Heart
        className={
          liked.includes(id)
            ? "fill-pink-500 stroke-none"
            : "stroke-slate-200 group-hover:stroke-slate-300"
        }
      />
    </button>
  );
}
