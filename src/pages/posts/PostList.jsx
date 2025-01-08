import {
    Datagrid,
    List,
    ReferenceField,
    TextField,
    EditButton,
    DeleteButton,
    TextInput,
    ReferenceInput
} from 'react-admin';

const PostList = () => {
    const postFilters =
        [
        <TextInput source ="q" label="Search" alwaysOn />,
            <ReferenceInput source="userId" label="User" reference='users' alwaysOn />
        ];
    return(
        <List filters={postFilters}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" label="Post title" />
                <ReferenceField source="userId" reference="users" />
                <TextField source="body" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
};

export default PostList;