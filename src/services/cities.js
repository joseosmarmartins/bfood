import { getRequest } from "./api";

export default async function getCities(query) {
  return await getRequest(`cities?q=${query}`);
}
