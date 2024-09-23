import React from "react";
import { useParams } from "react-router-dom";
import { terms } from "../../mock_db/term"; // Import the terms data
import { Helmet } from "react-helmet";

function TermPage() {
  const { term } = useParams(); // Get the term from the route
  const foundTerm = terms.find(
    (termObj) => termObj.term.toLowerCase() === term.toLowerCase()
  );

  return (
    <>
      <Helmet>
        <title>{term} &middot; Tech Dictionary</title>
      </Helmet>
      <div className="p-6">
        {foundTerm ? (
          <>
            <h1 className="text-2xl font-bold">{foundTerm.term}</h1>
            <p>{foundTerm.description}</p>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold">"{term}" not found</h1>
            <p>This term does not exist in the dictionary yet.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default TermPage;