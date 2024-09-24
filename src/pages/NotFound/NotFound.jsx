import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Reaction from "../../components/Reaction/Reaction";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found &middot; Tech Dictionary</title>
      </Helmet>
      <div className="text-center">
        <div className="my-5">
          <Reaction type="bad" className="mx-auto" />
        </div>
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p>
          Go back to <Link className="underline" to={"/"}>home</Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
