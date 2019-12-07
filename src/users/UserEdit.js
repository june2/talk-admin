import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  DisabledInput,
  TextInput,
  TextField,
  NumberInput,
  DateField,
  SelectInput,
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
          { id: 'NORMAL', name: '승인' },          
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
        <TextField source="platformVer" />
        <TextField source="platformOS" />
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
