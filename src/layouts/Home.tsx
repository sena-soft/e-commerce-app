import { Link, Outlet, useNavigate } from "react-router-dom";

import {
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoImage from "../assets/logo.png";
import { Button } from "@headlessui/react";

const Layout = () => {

  const navigate = useNavigate();

 

  return (
    <>
      <header className="bg-slate-800 fixed top-0 left-0 w-full h-16 flex gap-3 items-center justify-between z-50 shadow-md">
        <Link
          to="/"
          className="rounded-md inline-flex pr-2 items-center text-sm font-semibold text-slate-500 shadow-sm hover:opacity-60"
        >
          <img
            alt="Company logo"
            src={LogoImage}
            className="mx-auto h-12 w-auto"
          />
          <h1 className="block font-extrabold text-2xl text-blue-500 pl-2">  E-Commerce </h1>
        </Link>
        <div>

          <Button
          onClick={() => navigate(0)}
            className="inline-flex text-xs rounded-md p-1 cursor-pointer items-center mr-3 text-white hover:opacity-60 "
          >
            Reiniciar
            <ArrowPathIcon aria-hidden="true" className="h-6 w-6" />
          </Button>
         
        </div>
      </header>
      <ToastContainer />
      <main className="mt mx-auto max-w-6xl mt-10 p-1 md:p-12  bg-slate-100  shadow">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
