import { Heart } from "lucide-react";
import type { Puppy } from "../types";
import { useLiked } from "../context";

type ToggleLikeProps = {
  id: Puppy["id"];
};

export function LikeToggle({ id }: ToggleLikeProps) {
  const { liked, setLiked } = useLiked();

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
