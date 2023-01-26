import React from "react";
import { Link } from "react-router-dom";

// import images
import NotFoundImg from "../assets/images/not-found.jpg";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="relative flex h-screen items-center justify-center">
        <img
          src={NotFoundImg}
          alt="not found image"
          className="absolute top-0 left-0 h-full w-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/50" />

        {/* data */}
        <div className="z-30 text-center">
          <h1 className="mb-2 font-primary text-[32px] text-white lg:text-[48px]">
            404 Not Found
          </h1>
          <p className="mb-8 text-[15px] text-white">
            The page you're looking for was not found. <br />
            Please check the URL again.
          </p>
          <Link to="/" className="btn btn-primary btn-lg mx-auto inline-flex">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
