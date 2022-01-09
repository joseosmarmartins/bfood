import { getRequest } from "./api";

export default async function getRestaurants(params, start = 0, count = 10) {
  try {
    let req = `search?order=asc&start=${start}&count=${count}&city_id=${params.cityId}`;
    if (params.establishmentId) req += `&establishment_id=${params.establishmentId}`;
    if (params.cuisineId) req += `&cuisines=${params.cuisineId}`;

    const res = await getRequest(req);

    return res;
  } catch (e) {
    console.error(e);
  }

  return null
}
