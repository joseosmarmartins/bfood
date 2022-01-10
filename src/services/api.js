import axios from "axios";

const baseURL = "https://developers.zomato.com/api/v2.1/"
const token = "77576b2dae845bf32c1de0795a7753e1";

const api = axios.create({ baseURL })

async function getRequest(path) {
  return api.get(path, { headers: { "user-key": token } })
    .catch((error) => {
      Promise.reject(error);
    })
}

export { getRequest };
