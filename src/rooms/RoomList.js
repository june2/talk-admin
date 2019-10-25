import React from 'react';
import {
  Datagrid,
  Filter,
  List,
  Responsive,
  SearchInput,
  SimpleList,
  TextField,
  TextInput,
  DateField,
} from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import memoize from 'lodash/memoize';
import UsersField from '../components/UsersField';
import { dateOptions } from '../utils';

const UserFilter = ({ permissions, ...props }) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <TextInput source="name" />
  </Filter>
);

const rowClick = memoize(permissions => (id, basePath, record) => {
  return permissions === 'admin'
    ? Promise.resolve('edit')
    : Promise.resolve('show');
});

const UserList = ({ permissions, ...props }) => (
  <List
    {...props}
    filters={<UserFilter permissions={permissions} />}
    filterDefaultValues={{}}
    sort={{ field: 'updatedAt', order: 'DESC' }}
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
        <Datagrid rowClick={rowClick(permissions)}>
          <UsersField source="users" />
          <TextField source="lastMsg" />
          <DateField source="updatedAt" label="변경일" options={dateOptions} />
          <DateField source="createdAt" label="생성일" options={dateOptions} />
        </Datagrid>
      }
    />
  </List>
);

export default UserList;
export const UserIcon = PeopleIcon;