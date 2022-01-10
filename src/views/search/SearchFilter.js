import React from "react";

import { Autocomplete, FormControl, Grid, TextField } from "@mui/material";

const SearchFilter = ({ cuisinesOptions, cuisines = [], setCuisines }) => {

  return (
    <>
      <Grid item xs={8} md={5}>
        <FormControl fullWidth>
          <Autocomplete
            size="small"
            multiple
            getOptionLabel={(option) => typeof option === "string" ? option : option.cuisine.cuisine_name}
            options={cuisinesOptions}
            value={cuisines}
            onChange={(_, value) => setCuisines && setCuisines(value)}
            renderInput={(params) =>
              <TextField {...params}
                label="Tipos de Cozinha"
                placeholder="Comece a digitar para buscar..." />}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default SearchFilter;