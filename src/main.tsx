import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard";
import InputHandler from "./components/input-component/input-handler";
import ButtonHandler from "./components/button-component/button-handler";
import SnackbarHandler from "./components/snackbar-component/snackbar-handler";
import FormHandler, {
  action as formAction,
} from "./components/form-component/form-handler";
import TreeHandler from "./components/tree-component/tree-handler";

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
          {
            path: "dashboard/form-handler",
            element: <FormHandler />,
            action: formAction,
          },
          {
            path: "dashboard/tree-handler",
            element: <TreeHandler />,
          },
        ],
      },
    ],
  },
]);

export default function Main(): JSX.Element {
  return <RouterProvider router={router} />;
}
