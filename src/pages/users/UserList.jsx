import React from 'react'
import { Datagrid, List, TextField, EditButton, DeleteButton } from 'react-admin'

const UserList = () => {
  return <List>
    <Datagrid>
        <TextField source="id" />
        <TextField source="name " />
        <TextField source="username" />
        <TextField source="email" />
        <TextField source="phone" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
  </List>
}

export default UserList;