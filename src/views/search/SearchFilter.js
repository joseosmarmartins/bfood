import React, { useEffect, useState } from "react";

import { Autocomplete, FormControl, Grid, TextField } from "@mui/material";

import getEstablishments from "../../services/establishments";
import getCuisines from "../../services/cuisines";

const SearchFilter = ({ city, establishment, setEstablishment, cuisine, setCuisine }) => {

  const [establishmentsOptions, setEstablishmentsOptions] = useState([]);

  const [cuisinesOptions, setCuisinesOptions] = useState([]);

  useEffect(() => {
    if (!city) return;

    getEstablishments(city.id).then((data) => setEstablishmentsOptions(data));
    getCuisines(city.id).then((data) => setCuisinesOptions(data));
  }, [city])

  return (
    <>
      <Grid item xs={5}>
        <FormControl fullWidth>
          <Autocomplete
            size="small"
            getOptionLabel={(option) => typeof option === "string" ? option : option.establishment.name}
            disablePortal
            options={establishmentsOptions}
            value={establishment}
            onChange={(_, value) => setEstablishment && setEstablishment(value)}
            renderInput={(params) =>
              <TextField {...params}
                label="Tipos de Estabelecimento"
                placeholder="Comece a digitar para buscar..." />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={5}>
        <FormControl fullWidth>
          <Autocomplete
            size="small"
            getOptionLabel={(option) => typeof option === "string" ? option : option.cuisine.cuisine_name}
            disablePortal
            options={cuisinesOptions}
            value={cuisine}
            onChange={(_, value) => setCuisine && setCuisine(value)}
            renderInput={(params) =>
              <TextField {...params}
                label="Tipos de Culinária"
                placeholder="Comece a digitar para buscar..." />}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default SearchFilter;