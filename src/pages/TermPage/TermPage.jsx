import React from "react";
import { Link, useParams } from "react-router-dom";
import { terms } from "../../assets/data/mock_db/term"; // Import the terms data
import { Helmet } from "react-helmet";
import SearchBar from "../../components/SearchBar/SearchBar";
import Reaction from "../../components/Reaction/Reaction";

function TermPage() {
  const { term } = useParams(); // Get the term from the route
  const foundTerm = terms.find(
    (termObj) => termObj.term.toLowerCase() === term.toLowerCase()
  );

  return (
    <>
      <Helmet>
        <title>Dictionary: {term} &middot; Tech Dictionary</title>
      </Helmet>
      <div>
        <SearchBar autoFocus={false} required={false} />
      </div>
      <div className="p-4 lg:p-6">
        {foundTerm ? (
          <>
            <h1 className="text-2xl font-bold">{foundTerm.term}</h1>
            <p className="mb-4">
              {foundTerm.partOfSpeech} &middot; /{foundTerm.term.toLowerCase()}/
            </p>
            <p className="text-xl">{foundTerm.description}</p>
            <h6 className="font-bold mt-5">Example Usage</h6>
            <p>
              <em>{foundTerm.exampleUsage}</em>
            </p>
          </>
        ) : (
          <>
            <div className="my-5">
              <Reaction type="bad" className="mx-auto" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">"{term}" not found</h1>
              <p>This term does not exist in the dictionary yet.</p>
              <p>
                Consider submiting a{" "}
                <Link className="underline" to="/submit-word">
                  new word
                </Link>
                .
              </p>
            </div>
          </>
        )}
        {/* <div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">API</h1>
            <p>Application Programming Interface.</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default TermPage;
