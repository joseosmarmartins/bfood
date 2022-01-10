import React, { useState, useRef } from "react";

import { Alert, Box, Collapse, Snackbar } from "@mui/material";

import HomeOpen from "./HomeOpen";
import Search from "../search/Search";

const Home = () => {

  const searchRef = useRef(null);

  const [city, setCity] = useState(null);

  const [errorAlertOpen, setErrorAlertOpen] = useState(false);

  return (
    <Box id="home">
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={errorAlertOpen}
        autoHideDuration={5000}
        onClose={() => setErrorAlertOpen(false)}
      >
        <Alert severity="error" onClose={() => setErrorAlertOpen(false)}>Erro ao processar requisição!</Alert>
      </Snackbar>

      <HomeOpen onSelectCity={setCity} onRequestError={() => setErrorAlertOpen(true)} />
      <Collapse in={city != null} ref={searchRef}>
        <Search city={city} onRequestError={() => setErrorAlertOpen(true)} />
      </Collapse>
    </Box>
  );
};

export default Home;