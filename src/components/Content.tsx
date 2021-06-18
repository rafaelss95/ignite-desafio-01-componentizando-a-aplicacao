import { useEffect, useState } from "react";
import { Genre, Movie } from "../dtos";
import { api } from "../services/api";
import "../styles/content.scss";
import { MovieCard } from "./MovieCard";

type ContentProps = {
  readonly selectedGenre: Genre | null;
};

export function Content({ selectedGenre }: ContentProps) {
  const [movies, setMovies] = useState<readonly Movie[]>([]);

  useEffect(() => {
    if (!selectedGenre) return;

    api
      .get<readonly Movie[]>(`movies/?Genre_id=${selectedGenre.id}`)
      .then(({ data }) => setMovies(data));
  }, [selectedGenre]);

  return (
    <div className="container">
      {selectedGenre && (
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>
      )}

      <main>
        <div className="movies-list">
          {movies.map(({ imdbID, Title, Poster, Runtime, Ratings }) => (
            <MovieCard
              key={imdbID}
              title={Title}
              poster={Poster}
              runtime={Runtime}
              rating={Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
