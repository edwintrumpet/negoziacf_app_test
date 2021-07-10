const baseURL = 'https://negozia-api-test-staging.herokuapp.com';
// const baseURL = 'http://localhost:8000';

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
