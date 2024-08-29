import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard";
import InputHandler from "./components/input-component/input-handler";
import ButtonHandler from "./components/button-component/button-handler";
import SnackbarHandler from "./components/snackbar-component/snackbar-handler";
import FormHandler, {
  action as formAction,
} from "./components/form-component/form-handler";
import TreeHandler from "./components/tree-component/tree-handler";
import AutocompleteHandler from "./components/autocomplete-component/autocomplete-handler";
import SpinnerHandler from "./components/spinner-component/spinner-handler";
import MenuHandler from "./components/menu-component/menu-handler";
import SpinnerHandler2 from "./components/spinner-component/spinner-handler2";

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
          {
            path: "dashboard/autocomplete-handler",
            element: <AutocompleteHandler />,
          },
          {
            path: "dashboard/spinner-handler",
            element: <SpinnerHandler />,
          },
          {
            path: "dashboard/spinner-handler2",
            element: <SpinnerHandler2 />,
          },
          {
            path: "dashboard/menu-handler",
            element: <MenuHandler />,
          },
        ],
      },
    ],
  },
]);

export default function Main(): JSX.Element {
  return <RouterProvider router={router} />;
}
