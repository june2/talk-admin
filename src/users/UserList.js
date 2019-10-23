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
  DateField,
} from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import memoize from 'lodash/memoize';
import ParseField from '../components/ParseField';
import AgeField from '../components/AgeField';
import ImagesField from '../components/ImagesField';
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
        <Datagrid rowClick={rowClick(permissions)}>
          <TextField source="email" />
          <TextField source="name" />
          <ParseField source="gender" label="성별" enums={{ M: '남', F: '여' }} />
          <AgeField source="birthday" label="나이" />
          <TextField source="location" />
          <DateField source="lastLoginAt" label="마지막 접속" options={dateOptions} sortable={false} />
          <ImagesField source="images" label="프로필사진" sortable={false} />
        </Datagrid>
      }
    />
  </List>
);

export default UserList;
export const UserIcon = PeopleIcon;