import { getRequest } from "./api";

export default async function getEstablishments(cityId) {
  try {
    const res = await getRequest(`establishments?city_id=${cityId}`);

    return res.establishments;
  } catch (e) {
    console.error(e);
  }

  return null
}
