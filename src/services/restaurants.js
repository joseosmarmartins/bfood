import { getRequest } from "./api";

export default async function getRestaurants(params, start = 0, count = 10, sort = "rating", order = "dsc") {
  let req = `search?order=asc&start=${start}&count=${count}&city_id=${params.cityId}&sort=${sort}&order=${order}`;
  if (params.cuisines) req += `&cuisines=${params.cuisines}`;

  return await getRequest(req);
}
