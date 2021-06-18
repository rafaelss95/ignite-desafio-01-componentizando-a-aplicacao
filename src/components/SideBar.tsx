import { useEffect, useState } from "react";
import { Genre } from "../dtos";
import { api } from "../services/api";
import "../styles/sidebar.scss";
import { Button } from "./Button";

type SideBarProps = {
  readonly selectedGenre: Genre | null;
  readonly onGenreChange: (genre: Genre) => void;
};

export function SideBar({ selectedGenre, onGenreChange }: SideBarProps) {
  const [genres, setGenres] = useState<readonly Genre[]>([]);

  useEffect(() => {
    api.get<readonly Genre[]>("genres").then(({ data }) => {
      setGenres(data);
      onGenreChange(data[0]);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onGenreChange(genre)}
            selected={selectedGenre?.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
