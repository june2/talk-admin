import React, { Fragment } from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  DisabledInput,
  TextInput,
  required,
  TextField,
  LongTextInput,
  DateInput,
  NumberInput,
  BooleanInput,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
  DateField,
  ReferenceManyField,
  Datagrid,
  EditButton,
  SelectInput,
  Labeled
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import ParseField from '../components/ParseField';
import AgeField from '../components/AgeField';
import AgeInput from '../components/AgeInput';
import ImagesField from '../components/ImagesField';
import ImagesThumbField from '../components/ImagesThumbField';
import { dateOptions } from '../utils';

const UserEdit = props => (
  <Edit {...props} undoable={false}>
    <TabbedForm>
      <FormTab label="summary">
        <DisabledInput label="Id" source="id" />
        <SelectInput source="state" label="계정 상태" choices={[
          { id: 'ADMIN', name: '관리자' },
          { id: 'WAITING', name: '대기' },
          { id: 'REJECT', name: '반려' },
          { id: 'NORMAL', name: '승인' },
          { id: 'REWAITING', name: '재심사' },
          { id: 'BLOCK', name: '블락' },
          { id: 'LEAVE', name: '탈퇴' },
          { id: 'SAMPLE', name: '샘플' },
          { id: 'DATALK', name: '다톡' },
        ]} />
        <TextField source="email" label="이메일" />
        <TextInput source="name" label="이름" />
        <SelectInput source="gender" label="성별" choices={[
          { id: 'M', name: '남' },
          { id: 'F', name: '여' }
        ]} />
        <AgeInput source="birthday" label="나이" />
        <NumberInput source="point" />
        <TextInput source="location" />
        <RichTextInput source="intro" />
        <DateField source="lastLoginAt" label="마지막 접속" options={dateOptions} sortable={false} />
        <ImagesThumbField label="프로필 사진" />
        <TextField source="pushToken" />
        <TextField source="PlatformVer" />
        <TextField source="PlatformOS" />
      </FormTab>
      {/* <FormTab label="포인트">
        <ImageInput source="pictures" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>} multiple={true}>
          <ImageField source="src" title="title" />
        </ImageInput>
      </FormTab> */}
    </TabbedForm>
  </Edit>
);

export default UserEdit;
