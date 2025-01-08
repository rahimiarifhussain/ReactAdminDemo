import React from 'react'
import { Datagrid, List, TextField } from 'react-admin';

const CommentsList = () => {
  return <List >
    <Datagrid >
        <TextField source="id"  />
        <TextField source="name"  />
        <TextField source="email"  />
        <TextField source="body"  />
        
    </Datagrid>
  </List>
}


export default CommentsList;