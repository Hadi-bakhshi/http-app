import FullComment from "./pages/FullComment/FullComment";
import HomePage from "./pages/HomePage";
import NewComment from "./pages/NewComment/NewComment";

import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  { path: "/comments/:id", component: FullComment },
  { path: "/new-comment", component:NewComment },
  { path: "/", exact: true, component: HomePage },
  { component: NotFoundPage },
];

export default routes;
