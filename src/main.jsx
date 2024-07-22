import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard";
import InputHandler from "./components/input-component/input-handler";
import ButtonHandler from "./components/button-component/button-handler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <InputHandler></InputHandler> },
          {
            path: "dashboard/input-handler",
            element: <InputHandler />,
            // loader: contactLoader,
            // action: contactAction,
          },
          {
            path: "dashboard/button-handler",
            element: <ButtonHandler />,
            // loader: contactLoader,
            // action: editAction,
          },
          //   {
          //     path: "contacts/:contactId/destroy",
          //     // action: destroyAction,
          //     // errorElement: <div>Oops! There was an error.</div>,
          //   },
        ],
      },
    ],
  },
]);

export default function Main() {
  return <RouterProvider router={router}></RouterProvider>;
}
