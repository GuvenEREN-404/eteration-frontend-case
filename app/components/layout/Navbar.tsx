import React, { ReactNode } from "react";
import Drawer from "./Drawer";

type Props = {
  children: ReactNode;
};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="navbar bg-base-100 justify-between mb-5">
        <div>
        <Drawer />
        <a className="btn btn-ghost text-xl">ETERATION</a>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-32 md:w-auto lg:w-[700px]"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p>177.000</p>
          </div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />{" "}
            </svg>
            <p>Güven</p>
          </div>
        </div>
      </div>
      <div className=" p-4">{props.children}</div>
    </>
  );
};

export default Navbar;
