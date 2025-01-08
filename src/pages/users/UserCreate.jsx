import React from 'react'
import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

 const UserCreate = () => {
  return (
   <Create>
    <SimpleForm>
        <ReferenceInput  source=" userId"
         reference='users'/>
         <TextInput source='username' />
         <TextInput source='email' />
         <TextInput source='phone'/>
    </SimpleForm>
   </Create>
  )
}

export default UserCreate;