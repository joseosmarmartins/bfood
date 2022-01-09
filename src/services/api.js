import axios from "axios";

const token = "77576b2dae845bf32c1de0795a7753e1";

const api = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/"
})

api.interceptors.request.use(async config => {
  const token = "77576b2dae845bf32c1de0795a7753e1";

  if (token) api.defaults.headers["user-key"] = token;

  return config;
});

async function getRequest(path) {
  const promise = api.get(path, { headers: { "user-key": token } })

  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export { getRequest };
