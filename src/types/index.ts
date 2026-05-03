export type Puppy = {
  id: number;
  name: string;
  trait: string;
  imageUrl: string;
  likedBy: User["id"][];
};

export type User = {
  id: number;
};
