const env = process.env.NODE_ENV;
const apiUrlProd = process.env.API_URL_PROD;
const apiUrlDev = process.env.API_URL_DEV;

const baseURL = env === 'production' ? apiUrlProd : apiUrlDev;

export const loginService = async (payload) => {
  const path = 'login';
  const URL = `${baseURL}/${path}`;
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
};

export const logoutService = async () => {
  const path = 'logout';
  const URL = `${baseURL}/${path}`;
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
};
