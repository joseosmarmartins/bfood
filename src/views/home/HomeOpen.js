import React from "react";

import { Grid, Typography } from "@mui/material";

import { BackgroundHome, BoxHome } from "../../style/styles";

import HomeFilter from "./HomeFilter";

const HomeOpen = ({ onSelectCity }) => {

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
            <HomeFilter onSelectCity={onSelectCity} />
          </Grid>
        </Grid>
      </BoxHome>
    </BackgroundHome>
  );
};

export default HomeOpen;