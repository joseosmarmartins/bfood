import React, { useState } from "react";

import { Autocomplete, FormControl, TextField, ThemeProvider } from "@mui/material";

import getCityName from "../../utils/cityName"
import { theme } from "../../style/theme";

const HomeFilter = ({ onSelectCity, citiesOptions, loadingCities, onInputChange }) => {

  const [city, setCity] = useState(null);

  function handleSelectCity(val) {
    setCity(val);
    onSelectCity && onSelectCity(val);
  }

  return (
    <FormControl fullWidth>
      <Autocomplete
        getOptionLabel={(option) => typeof option === "string" ? option : getCityName(option)}
        filterOptions={(x) => x}
        options={citiesOptions}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={city}
        loading={loadingCities}
        onChange={(_, value) => handleSelectCity(value)}
        onInputChange={(_, query) => {
          onInputChange(query)
        }}
        noOptionsText="Sem resultados"
        loadingText="Carregando..."
        renderInput={(params) => (
          <ThemeProvider theme={theme}>
            <TextField {...params}
              label="Cidade"
              placeholder="Comece a digitar para buscar..."
              fullWidth />
          </ThemeProvider>
        )}
      />
    </FormControl>
  );
};

export default HomeFilter;