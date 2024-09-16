import "./styles.css";
import { useState } from "react";
import AlbumList from "./AlbumList";
export default function App() {
  const myAlbums = [];

  return (
    <div className="App">
      <h1>My albums</h1>
      <AlbumList />
    </div>
  );
}
