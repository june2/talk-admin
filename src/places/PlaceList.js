/* eslint react/jsx-key: off */
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import memoize from 'lodash/memoize';

import React from 'react';
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  Responsive,
  SearchInput,
  ShowButton,
  SimpleList,
  TextField,
  TextInput,
} from 'react-admin';

export const UserIcon = PeopleIcon;

const rowClick = memoize(permissions => (id, basePath, record) => {
  return permissions === 'admin'
    ? Promise.resolve('edit')
    : Promise.resolve('show');
});

const PlaceList = ({ permissions, ...props }) => (
  <List
    {...props}    
    filterDefaultValues={{ role: 'user' }}
    sort={{ field: 'name', order: 'ASC' }}
  >
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record =>
            permissions === 'admin' ? record.role : null
          }
        />
      }
      medium={
        <Datagrid
          rowClick={rowClick(permissions)}          
        >
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="email" />
          {permissions === 'admin' && <TextField source="role" />}
        </Datagrid>
      }
    />
  </List>
);

export default PlaceList;
