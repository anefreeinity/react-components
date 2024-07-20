import { NavLink, Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="h-screen w-screen justify-center items-center">
      <div className="flex flex-row h-1/6 bg-gray-300 justify-center items-center">
        <NavLink
          to="dashboard/input-handler"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Input
        </NavLink>
      </div>
      <div className="flex flex-col h-5/6 justify-center items-center bg-slate-900">
        <div className="flex flex-col w-1/3 justify-center items-center">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
