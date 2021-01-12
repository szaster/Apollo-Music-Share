import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";
import { PlayArrow, Save } from "@material-ui/icons";
import React from "react";

function SongList() {
  //creating loading spinner
  let loading = false;

  const song = {
    title: "bla",
    artist: "blabla",
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FxiXLtEi4Ui8%2Fmaxresdefault.jpg&f=1&nofb=1",
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );
}

function Song({ song }) {
  const { thumbnail, title } = song;
  return (
    <Card>
      <div>
        <CardMedia image={thumbnail} />
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {title}
            </Typography>
            <IconButton size="small" color="primary">
              <PlayArrow />
            </IconButton>
            <IconButton size="small" color="secondary">
              <Save color="secondary" />
            </IconButton>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

export default SongList;
