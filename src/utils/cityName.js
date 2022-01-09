const getCityName = (city) => {
  let cityName = "";

    if (city) {
      cityName += city.name;

      if (city.state_code) cityName += `, ${city.state_code}`;
      if (city.country_name) cityName += `, ${city.country_name}`;
    }

    return cityName;
}

export default getCityName;
