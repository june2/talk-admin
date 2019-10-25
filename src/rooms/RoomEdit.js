import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  DisabledInput,
} from 'react-admin';
import UsersField from '../components/UsersField';
import Chat from './Chat';

const RoomEdit = props => (
  <Edit {...props} undoable={false}>
    <TabbedForm>
      <FormTab label="summary">
        <DisabledInput label="Id" source="id" />
        <UsersField source="users" />
      </FormTab>
      <FormTab label="채팅">
        <Chat />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default RoomEdit;
