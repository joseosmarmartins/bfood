import { getRequest } from "./api";

export default async function getCities(query) {
  try {
    const res = await getRequest(`cities?q=${query}`);

    return res.location_suggestions;
  } catch (e) {
    console.error(e);
  }

  return null
}
