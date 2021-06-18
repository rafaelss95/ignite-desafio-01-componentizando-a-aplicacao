export type Genre = {
  readonly id: number;
  readonly name:
    | "action"
    | "comedy"
    | "documentary"
    | "drama"
    | "horror"
    | "family";
  readonly title: string;
};
