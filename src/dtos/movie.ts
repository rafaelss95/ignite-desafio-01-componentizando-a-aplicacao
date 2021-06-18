type Rating = {
  readonly Source: string;
  readonly Value: string;
};

export type Movie = {
  readonly imdbID: string;
  readonly Title: string;
  readonly Poster: string;
  readonly Ratings: readonly Rating[];
  readonly Runtime: string;
};
