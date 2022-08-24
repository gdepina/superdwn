const register = (values) => {
  // eslint-disable-next-line no-undef
  const form = new FormData();
  form.append('name', values.name);
  form.append('surname', values.surname);
  form.append('email', values.email);
  form.append('password', values.password);
  form.append('birthDate', values.birthDate);
  form.append('userName', values.userName);

  const options = {
    method: 'POST',
    body: form,
  };
  return fetch('/api/user/', options)
    .then((result) => result.json())
    .catch((error) => console.log(error));
};

// eslint-disable-next-line import/prefer-default-export
export { register };
