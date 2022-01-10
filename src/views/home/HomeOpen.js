import React, { useState } from "react";

import { Grid, Typography } from "@mui/material";

import { BackgroundHome, BoxHome } from "../../style/styles";

import HomeFilter from "./HomeFilter";

import getCities from "../../services/cities";

let timer
const HomeOpen = ({ onSelectCity, onRequestError }) => {

  const [loadingCities, setLoadingCities] = useState(false);

  const [citiesOptions, setCitiesOptions] = useState([]);

  function fetchCities(query) {
    if (!query) return;

    clearTimeout(timer);
    setLoadingCities(true);

    timer = setTimeout(async () => {
      try {
        const res = await getCities(query);

        setCitiesOptions(res.data.location_suggestions);
        setLoadingCities(false);
      } catch (e) {
        onRequestError && onRequestError();
      }
    }, 800)
  }

  return (
    <BackgroundHome>
      <BoxHome>
        <Grid container justifyContent="center">
          <Grid item xs={12} justifyContent="center">
            <Typography variant="h1" component="div" align="center">
              BFood
            </Typography>
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <Typography variant="h6" component="div" align="center" gutterBottom color="#d6d6d6" fontWeight="100">
              Escolha sua cidade para começarmos
            </Typography>
          </Grid>
          <Grid item xs={8} md={12} marginTop="3rem">
            <HomeFilter
              onSelectCity={onSelectCity}
              citiesOptions={citiesOptions}
              loadingCities={loadingCities}
              onInputChange={fetchCities}
            />
          </Grid>
        </Grid>
      </BoxHome>
    </BackgroundHome>
  );
};

export default HomeOpen;