import App from "../App";
import AppLayout from "../layouts/AppLayout";
import TodoApp from "../applications/TodoApp";
import { createBrowserRouter } from "react-router-dom";
import WindowResize from "../applications/WindowResize";
import RealTimeSearchableField from "../applications/RealTimeSearchField";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/todo",
        element: <TodoApp />,
      },
      {
        path: "/resizewindow",
        element: <WindowResize />,
      },
      {
        path: "/realtimesearch",
        element: <RealTimeSearchableField />,
      },
    ],
  },
]);
