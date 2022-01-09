import { getRequest } from "./api";

export default async function getCuisines(cityId) {
  try {
    const res = await getRequest(`cuisines?city_id=${cityId}`);

    return res.cuisines;
  } catch (e) {
    console.error(e);
  }

  return null
}
