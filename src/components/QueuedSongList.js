import {
  IconButton,
  Typography,
  Avatar,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";
import React from "react";

function QueuedSongList() {
  const greaterThanMedium = useMediaQuery((theme) =>
    theme.breakpoints.up("md")
  );

  const song = {
    title: "Cozy Winter",
    artist: "Lofi",
    thumbnail:
      "https://i.ytimg.com/vi/_tV5LEBDs7w/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBdRv2Ef4iSWCpZ_nqgPv2DestKqA",
  };

  return (
    greaterThanMedium && (
      <div style={{ margin: "10px, 0" }}>
        <Typography color="textSecondary" variant="button">
          QUEUE (5)
        </Typography>
        {Array.from({ length: 5 }, () => song).map((song, i) => (
          <QueuedSong key={i} song={song} />
        ))}
      </div>
    )
  );
}

const useStyles = makeStyles({
  avatar: { width: 44, height: 44 },
  text: { textOverflow: "ellipsis", overflow: "hidden" },
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "50px auto 50px",
    gridGap: 12,
    alignItems: "center",
    marginTop: 10,
  },
  songInfoContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

function QueuedSong({ song }) {
  const classes = useStyles();
  const { thumbnail, artist, title } = song;
  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar} src={thumbnail} alt="Song thumbnail" />
      <div className={classes.songInfoContainer}>
        <Typography className={classes.text} variant="subtitle2">
          {title}
        </Typography>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="body2"
        >
          {artist}
        </Typography>
      </div>
      <IconButton>
        <Delete color="error" />
      </IconButton>
    </div>
  );
}

export default QueuedSongList;
