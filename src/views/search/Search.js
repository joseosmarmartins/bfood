import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Backdrop, CircularProgress, Grid, Typography } from "@mui/material";

import { BackgroundSearch, BoxSearch, ButtonUp, CityName } from "../../style/styles";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import DialogImages from "./dialogs/DialogImages";
import SearchResult from "./SearchResult";
import SearchFilter from "./SearchFilter";

import getRestaurants from "../../services/restaurants";

import getCityName from "../../utils/cityName";

const Search = ({ city }) => {

  const [restaurants, setRestaurants] = useState([]);

  const [openImages, setOpenImages] = useState(false);

  const [photos, setPhotos] = useState([]);

  const [establishment, setEstablishment] = useState(null);

  const [cuisine, setCuisine] = useState(null);

  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(0);

  const [open, setOpen] = useState(false);

  function handleClick(row) {
    setPhotos(row.restaurant.photos || []);
    setOpenImages(true);
  }

  async function fetchRestaurants() {
    if (!city) return;

    setOpen(true);

    const params = { cityId: city.id };
    if (establishment) params.establishmentId = establishment.establishment.id;
    if (cuisine) params.cuisineId = cuisine.cuisine.cuisine_id;

    let start = 0;
    const count = 10;
    if (page !== 0) start = page * count;

    const res = await getRestaurants(params, start, count);
    setTotal(res.results_found);
    setRestaurants(res.restaurants);

    setOpen(false);

    const root = document.getElementById("root");
    window.scrollTo({ top: root.scrollHeight, behavior: "smooth" });
  }

  useEffect(() => {
    setPage(0);

    fetchRestaurants();
  }, [establishment, cuisine])

  useEffect(() => {
    setEstablishment(null);
    setCuisine(null);
    setPage(0);

    fetchRestaurants();
  }, [city])

  useEffect(() => {
    fetchRestaurants();
  }, [page])

  return (
    <BackgroundSearch container>
      <Grid item xs={12} textAlign="left" sx={{ m: 3 }}>
        <Typography variant="h6" component="div" align="left" gutterBottom>
          Restaurantes para a cidade de&nbsp;
          <CityName>
            {getCityName(city)}
          </CityName>
        </Typography>
      </Grid>
      <BoxSearch>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2} justifyContent="center">
            <SearchFilter
              city={city}
              establishment={establishment}
              setEstablishment={setEstablishment}
              cuisine={cuisine}
              setCuisine={setCuisine}
            />
          </Grid>
          <Grid item xs={12}>
            <SearchResult
              restaurants={restaurants}
              handleClick={handleClick}
              total={total}
              page={page}
              handleChangePage={(_, newPage) => setPage(newPage)}
            />
          </Grid>
        </Grid>
      </BoxSearch>
      <Grid item xs={12} textAlign="right" sx={{ m: 3 }}>
        <ButtonUp size="small" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FontAwesomeIcon icon={faArrowUp} />
        </ButtonUp>
      </Grid>

      <DialogImages open={openImages} handleClose={() => setOpenImages(false)} images={photos} />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </BackgroundSearch>
  );
};

export default Search;