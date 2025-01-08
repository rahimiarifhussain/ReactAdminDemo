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
import PostCreate from "./pages/posts/PostCreate";

import UserList from "./pages/users/UserList";
import UserShow from "./pages/users/UserShow";
import UserEdit from "./pages/users/UserEdit";
import UserCreate from "./pages/users/UserCreate";

import CommentsList from "./pages/comments/CommentsList";
import CommentShow from "./pages/comments/CommentShow";

import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";

import Home from './pages/Home';

import  authProvider  from "./authProvider";
export const App = () => (
  <Admin 
  layout={Layout}
   dataProvider={dataProvider} 
   dashboard={Home}
   authProvider={authProvider}
   >

    <Resource
      icon={ArticleIcon}
      name="posts"
      list={PostList} show={PostShow}
      edit={PostEdit} create={PostCreate} />

    <Resource 
    icon={PersonIcon}
    name="users"
     list={UserList}
      show={UserShow} 
      edit={UserEdit}
      create={UserCreate}
       />

    <Resource name="comments" list={CommentShow} show={ShowGuesser} />
  </Admin>
);
