const signIn = (user) => fetch('/api/login', {
  method: 'POST',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .catch((err) => console.log(err));

// eslint-disable-next-line import/prefer-default-export
export { signIn };
