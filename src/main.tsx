import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard";
import InputHandler from "./components/input-component/input-handler";
import ButtonHandler from "./components/button-component/button-handler";
import SnackbarHandler from "./components/snackbar-component/snackbar-handler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        children: [
          { index: true, element: <InputHandler /> },
          {
            path: "dashboard/input-handler",
            element: <InputHandler />,
          },
          {
            path: "dashboard/button-handler",
            element: <ButtonHandler />,
          },
          {
            path: "dashboard/snackbar-handler",
            element: <SnackbarHandler />,
          },
        ],
      },
    ],
  },
]);

export default function Main(): JSX.Element {
  return <RouterProvider router={router} />;
}
