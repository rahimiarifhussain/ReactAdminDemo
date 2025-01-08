import React from 'react'
import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

 const PostCreate = () => {
  return (
   <Create>
    <SimpleForm>
        <ReferenceInput  source=" userId"
         reference='posts'/>
         <TextInput source='title' />
         <TextInput source='body' multiline rows={5} />
    </SimpleForm>
   </Create>
  )
}

export default PostCreate;