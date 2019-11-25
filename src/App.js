import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import { API_URL } from './config';
import { Dashboard } from './dashboard';
import Login from './login';
import addUploadFeature from './utils/UploadFeature';
import authProvider from './providers/authProvider.js';
import restProvider from './providers/restProvider.js';

import UserIcon from '@material-ui/icons/Group';
import users from './users';
import users2 from './users2';

import PlaceIcon from '@material-ui/icons/Place';
import rooms from './rooms';


// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }  
  const token = localStorage.getItem('token');
  // options.headers.set('X-Custom-Header', 'X-Total-Count');
  options.headers.set('Authorization', `Bearer ${token}`);  
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = restProvider(API_URL, httpClient);
const uploadCapableDataProvider = addUploadFeature(dataProvider);

const App = () => (
  <Admin loginPage={Login} dashboard={Dashboard} authProvider={authProvider} dataProvider={uploadCapableDataProvider}>    
    <Resource name="users" icon={UserIcon} {...users} />
    <Resource name="user_real" icon={UserIcon} {...users2} />
    <Resource name="rooms" icon={PlaceIcon} {...rooms} />
  </Admin>
);

export default App;