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
import getCuisines from "../../services/cuisines";

const Search = ({ city, onRequestError }) => {

  const [restaurants, setRestaurants] = useState([]);

  const [openImages, setOpenImages] = useState(false);

  const [restaurant, setRestaurant] = useState({ photos: [] });

  const [cuisines, setCuisines] = useState([]);

  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(0);

  const [open, setOpen] = useState(false);

  const [sort, setSort] = useState("rating");

  const [order, setOrder] = useState("desc");

  const [cuisinesOptions, setCuisinesOptions] = useState([]);

  function handleClick(row) {
    setRestaurant(row.restaurant || []);
    setOpenImages(true);
  }

  async function fetchCuisines(cityId) {
    try {
      const res = await getCuisines(cityId);

      setCuisinesOptions(res.data.cuisines)
    } catch (e) {
      onRequestError && onRequestError();
    }
  }

  async function fetchRestaurants() {
    if (!city) return;

    setOpen(true);

    const params = { cityId: city.id };
    if (cuisines) params.cuisines = cuisines.map((item) => item.cuisine.cuisine_id);

    let start = 0;
    const count = 10;
    if (page !== 0) start = page * count;

    try {
      const res = await getRestaurants(params, start, count, sort, order === "desc" ? "dsc" : order);
      setTotal(res.data.results_found);
      setRestaurants(res.data.restaurants);
    } catch (e) {
      onRequestError && onRequestError();
    }

    setOpen(false);

    const root = document.getElementById("root");
    window.scrollTo({ top: root.scrollHeight, behavior: "smooth" });
  }

  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSort(sortParam) {
    if (sort === sortParam) setOrder(order === "asc" ? "desc" : "asc");
    else setSort(sortParam);
  }

  useEffect(() => {
    setPage(0);

    fetchRestaurants();
  }, [cuisines])

  useEffect(() => {
    setCuisines(null);
    setPage(0);

    fetchRestaurants();

    if (city) fetchCuisines(city.id)
  }, [city])

  useEffect(() => {
    fetchRestaurants();
  }, [page, sort, order])

  return (
    <BackgroundSearch container>
      <Grid item xs={12} sx={{ m: 3 }}>
        <Typography variant="h6" component="div" align="center" gutterBottom>
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
              cuisinesOptions={cuisinesOptions}
              cuisines={cuisines || []}
              setCuisines={setCuisines}
              onRequestError={onRequestError}
            />
          </Grid>
          <Grid item xs={12}>
            <SearchResult
              restaurants={restaurants}
              handleClick={handleClick}
              total={total}
              page={page}
              handleChangePage={(_, newPage) => setPage(newPage)}
              sort={sort}
              order={order}
              handleSort={handleSort}
            />
          </Grid>
        </Grid>
      </BoxSearch>
      <Grid item xs={12} textAlign="right" sx={{ m: 3 }}>
        <ButtonUp size="small" onClick={backToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </ButtonUp>
      </Grid>

      <DialogImages open={openImages} handleClose={() => setOpenImages(false)} restaurant={restaurant} />

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