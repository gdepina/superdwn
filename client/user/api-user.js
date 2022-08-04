const CUIT = 30278205627;

const create = (user) =>
  fetch('/api/users/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

const list = () =>
  fetch('/api/users/', {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

const read = (params, credentials) =>
  fetch(`/api/users/${params.userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credentials.t}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

const update = (params, credentials, user) =>
  fetch(`/api/users/${params.userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credentials.t}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

const remove = (params, credentials) =>
  fetch(`/api/users/${params.userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credentials.t}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

const createBankUserAccount = (params) => {
  const body = {
    idUsuario: +params.cuil,
    contrasena: '1234',
    nombre: params.name,
    apellido: params.email,
    idRol: { id: 1 },
    idProducto: { id: 5 },
  };
  return fetch('https://bank-back.herokuapp.com/api/v1/usuario', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

const getBankAccount = (params) =>
  fetch(`https://bank-back.herokuapp.com/api/v1/cuentas/${params.cuil}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

const registerPresentism = (params) => {
  const body = {
    cuil: +params.cuil,
    cuit: CUIT,
    accion: 'A',
  };
  return fetch('https://presentismo-integrado.herokuapp.com/NovedadEmpleado', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export { create, list, read, update, remove, createBankUserAccount, getBankAccount, registerPresentism };
