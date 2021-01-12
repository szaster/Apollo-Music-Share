import { lime, deepOrange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: lime,
    secondary: deepOrange,
  },
});

export default theme;
