const baseURL = 'https://negozia-api-test-staging.herokuapp.com';

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
  const path = 'own';
  const URL = `${baseURL}/${path}`;
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
};
