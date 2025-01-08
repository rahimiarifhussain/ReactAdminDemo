import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

import PostList from "./pages/posts/PostList";
import PostShow from "./pages/posts/PostShow";
import PostEdit from "./pages/posts/PostEdit";

import UserList from "./pages/users/UserList";
import UserShow from "./pages/users/UserShow";
import UserEdit from "./pages/users/UserEdit";

import CommentsList from "./pages/comments/CommentsList";
import CommentShow from "./pages/comments/CommentShow";

export const App =() => (
    <Admin layout={Layout} dataProvider={dataProvider}>

    <Resource name="posts" list={PostList}  show={PostShow} edit={PostEdit} />

    <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} />

    <Resource name="comments" list={CommentShow} show={ShowGuesser} />
  </Admin> 
);
