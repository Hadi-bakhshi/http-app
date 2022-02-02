import FullComment from "./Components/FullComment/FullComment";
import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewCommentPage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  { path: "/comments/:id", component: FullComment },
  { path: "/new-comment", component: NewCommentPage },
  { path: "/", exact: true, component: HomePage },
  { component: NotFoundPage },
];

export default routes;
