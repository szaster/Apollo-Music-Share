import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import QueuedSongList from "./components/QueuedSongList";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";

function App() {
  return (
    <div>
      <Header />
      <AddSong />
      <SongList />
      <SongPlayer />
      <QueuedSongList />
    </div>
  );
}

export default App;
