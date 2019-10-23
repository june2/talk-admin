import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'react-admin';
import { API_URL } from './../config';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { email, password } = params;
    const request = new Request(`${API_URL}/auth/login/admin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}`
    })
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ expiresIn, accessToken }) => {
        localStorage.setItem('role', 'admin');
        localStorage.setItem('token', accessToken);
      });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem('role');
    return Promise.resolve(role);
  }
  return Promise.reject('Unkown method');
};
