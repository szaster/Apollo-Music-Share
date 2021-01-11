import { lime, deepPurple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: lime,
    secondary: deepPurple,
  },
});

export default theme;
