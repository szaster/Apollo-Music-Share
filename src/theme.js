import { lime, teal } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: lime,
    secondary: teal,
  },
});

export default theme;
