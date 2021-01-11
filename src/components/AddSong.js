import React from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";
// import { AddOutlinedIcon } from "@material-ui/icons/AddOutlined";
import { Link, AddBoxOutlined } from "@material-ui/icons";

function AddSong() {
  const [dialog, setDialog] = React.useState(false);

  return (
    <div>
      <TextField
        placeholder="Add Youtube or Soundcloud Url"
        fullwidth
        margin="normal"
        type="url"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" endIcon={<AddBoxOutlined />}>
        Add
      </Button>
    </div>
  );
}

export default AddSong;
