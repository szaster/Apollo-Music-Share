import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import HeadsetTwoToneIcon from "@material-ui/icons/HeadsetTwoTone";

import React from "react";

// Makes individual styles for each component
const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <HeadsetTwoToneIcon />
        <Typography className={classes.title} variant="h6" component="h1">
          Apollo Music Share
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
