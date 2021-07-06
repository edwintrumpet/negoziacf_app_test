// eslint-disable-next-line import/prefer-default-export
export const loginService = () => {
  const token = 'secureToken';
  const name = 'Edwin';
  return new Promise((res) => {
    setTimeout(() => {
      res({ token, name });
    }, 3000);
  });
};
