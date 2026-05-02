import { Heart, LoaderCircle } from "lucide-react";
import type { Puppy } from "../types";
import { useLiked } from "../context";
import { useState } from "react";

type ToggleLikeProps = {
  id: Puppy["id"];
};

export function LikeToggle({ id }: ToggleLikeProps) {
  const { liked, setLiked } = useLiked();
  const [pending, setPending] = useState(false);

  function handleClick() {
    setPending(true);

    setTimeout(() => {
      if (liked.includes(id)) {
        setLiked(liked.filter((pupId) => pupId !== id));
      } else {
        setLiked([...liked, id]);
      }

      setPending(false);
    }, 1500);
  }

  return (
    <button className="group flex items-center gap-1" onClick={handleClick}>
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            liked.includes(id)
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </button>
  );
}
