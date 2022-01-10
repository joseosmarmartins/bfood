import { getRequest } from "./api";

export default async function getCuisines(cityId) {
  return await getRequest(`cuisines?city_id=${cityId}`);
}
