import { useQuery } from "@apollo/react-hooks";
import { GET_SONGS } from "../graphql/queries";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
  makeStyles,
  CardActions,
} from "@material-ui/core";
import { PlayArrow, Save } from "@material-ui/icons";
import React from "react";

function SongList() {
  //creating loading spinner
  // let loading = false;

  const { data, loading, error } = useQuery(GET_SONGS);

  // const song = {
  //   title: "Cozi Winter",
  //   artist: "Lofi",
  //   thumbnail:
  //     "https://i.ytimg.com/vi/_tV5LEBDs7w/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBdRv2Ef4iSWCpZ_nqgPv2DestKqA",
  // };

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
  if (error) return <div>Error fetching songs!</div>;

  return (
    <div>
      {data.songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}

      {/* {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))} */}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  //rules:
  container: {
    margin: theme.spacing(3),
  },
  songInfoContainer: {
    display: "flex",
    alignItems: "center",
  },
  songInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  thumbnail: {
    objectFit: "cover",
    width: 140,
    height: 140,
  },
}));

function Song({ song }) {
  const classes = useStyles();
  const { thumbnail, artist, title } = song;
  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia image={thumbnail} className={classes.thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" color="primary">
              <PlayArrow />
            </IconButton>
            <IconButton size="small" color="secondary">
              <Save />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

export default SongList;
