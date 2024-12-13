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

import MenuHandler from "./components/menu-component/menu-handler";
import DotPulseHandler from "./components/spinner-component/dot-pulse-handler";
import DotSpinnerHandler from "./components/spinner-component/dot-spinner-handler";
import DotStreamHandler from "./components/spinner-component/dot-stream-handler";
import LineSpinnerHandler from "./components/spinner-component/line-spinner-handler";
import RingHandler from "./components/spinner-component/ring-handler";
import TailspinHandler from "./components/spinner-component/tailspin-handler";
 
import AvatarHandler from "./components/avatar-component/avatar-handler";

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
            path: "dashboard/dot-pulse-handler",
            element: <DotPulseHandler />,
          },
          {
            path: "dashboard/dot-spinner-handler",
            element: <DotSpinnerHandler />,
          },
          {
            path: "dashboard/dot-stream-handler",
            element: <DotStreamHandler />,
          },
          {
            path: "dashboard/line-spinner-handler",
            element: <LineSpinnerHandler />,
          },
          {
            path: "dashboard/ring-handler",
            element: <RingHandler />,
          },
          {
            path: "dashboard/tailspin-handler",
            element: <TailspinHandler />,
          },
          {
            path: "dashboard/line-spinner-handler",
            element: <LineSpinnerHandler />,
          },
          {
            path: "dashboard/menu-handler",
            element: <MenuHandler />,
          },
          {
            path: "dashboard/avatar-handler",
            element: <AvatarHandler />,
          },
        ],
      },
    ],
  },
]);

export default function Main(): JSX.Element {
  return <RouterProvider router={router} />;
}
