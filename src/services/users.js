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

export const getOwnUserService = async () => {
  const path = 'users/own';
  const URL = `${baseURL}/${path}`;
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
};

export const listUsersService = async () => {
  const path = 'users';
  const URL = `${baseURL}/${path}`;
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return response.json();
};
