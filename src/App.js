import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";

import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div>
      <Header />
      <Grid container spacing={3}>
        <Grid item>
          <AddSong />
          <SongList />
        </Grid>
        <Grid item>
          <SongPlayer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
