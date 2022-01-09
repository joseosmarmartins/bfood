import React, { useState } from "react";

import { Autocomplete, FormControl, TextField } from "@mui/material";

import getCities from "../../services/cities";

import getCityName from "../../utils/cityName"

let timer;
const HomeFilter = ({ onSelectCity }) => {

  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState([]);

  const [city, setCity] = useState(null);

  function handleSelect(val) {
    setCity(val);
    onSelectCity && onSelectCity(val);
  }

  function fetchCities(query) {
    if (!query) return;

    clearTimeout(timer);
    setLoading(true);

    timer = setTimeout(() => {
      getCities(query).then((data) => {
        setOptions(data);
        setLoading(false);
      });
    }, 800)
  }

  return (
    <FormControl fullWidth>
      <Autocomplete
        getOptionLabel={(option) => typeof option === "string" ? option : getCityName(option)}
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={city}
        loading={loading}
        onChange={(_, value) => handleSelect(value)}
        onInputChange={(_, query) => {
          fetchCities(query);
        }}
        renderInput={(params) => (
          <TextField {...params}
            label="Cidade"
            placeholder="Comece a digitar para buscar..."
            fullWidth />
        )}
      />
    </FormControl>
  );
};

export default HomeFilter;