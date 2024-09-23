import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found &middot; Tech Dictionary</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p>
          Go back to <Link to={"/"}>home</Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
