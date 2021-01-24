import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Slider,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import QueuedSongList from "./QueuedSongList";
import { SkipPrevious, PlayArrow, SkipNext } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: { display: "flex", justifyContent: "space-between" },
  details: { display: "flex", flexDirection: "column", padding: "0px 15px" },
  content: {
    flex: "1 0 auto",
  },
  thumbnail: { width: 150 },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function SongPlayer() {
  const classes = useStyles();
  return (
    <div>
      <Card variant="outlined" className={classes.container}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h3">
              title
            </Typography>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              Artist
            </Typography>
          </CardContent>
          {/* controls to play the song */}
          <div className={classes.controls}>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <PlayArrow className={classes.playIcon} />
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              00:01:30
            </Typography>
          </div>
          <Slider type="range" min={0} max={1} step={0.01} />
        </div>
        <CardMedia
          className={classes.thumbnail}
          image="https://i.ytimg.com/vi/_tV5LEBDs7w/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBdRv2Ef4iSWCpZ_nqgPv2DestKqA"
        />
      </Card>
      <QueuedSongList />
    </div>
  );
}

export default SongPlayer;
