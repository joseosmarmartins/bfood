import React, { useState, useRef } from "react";

import { Box, Collapse, ThemeProvider } from "@mui/material";

import HomeOpen from "./HomeOpen";
import Search from "../search/Search";

import { theme } from "../../style/theme";

const Home = () => {

  const searchRef = useRef(null);

  const [city, setCity] = useState(null);

  return (
    <Box id="home">
      <ThemeProvider theme={theme}>
        <HomeOpen onSelectCity={setCity} />
      </ThemeProvider>
      <Collapse in={city != null} ref={searchRef}>
        <Search city={city}/>
      </Collapse>
    </Box>
  );
};

export default Home;