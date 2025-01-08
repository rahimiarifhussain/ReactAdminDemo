import { Datagrid, List, ReferenceField, TextField, EditButton, DeleteButton} from 'react-admin';

const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label= "Post title" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="body" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default PostList;