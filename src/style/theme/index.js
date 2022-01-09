import { createTheme } from "@mui/material";

const theme = createTheme(
  {
    palette: {
      mode: "dark",
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  },
);

export { theme };