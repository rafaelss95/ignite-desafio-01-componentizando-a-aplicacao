import { useState } from "react";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { Genre } from "./dtos";
import "./styles/content.scss";
import "./styles/global.scss";
import "./styles/sidebar.scss";

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
      <Content selectedGenre={selectedGenre} />
    </div>
  );
}
