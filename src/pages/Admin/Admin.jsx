import React, { useState } from "react";
import { terms } from "../../assets/data/mock_db/term"; // Import the local data
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Reaction from "../../components/Reaction/Reaction";

function Admin() {
  const [submissions, setSubmissions] = useState(terms); // Use terms array as submissions

  const handleApprove = (id) => {
    // Simulate approving by removing from the list
    setSubmissions(submissions.filter((sub) => sub.id !== id));
  };

  const handleReject = (id) => {
    // Simulate rejecting by removing from the list
    setSubmissions(submissions.filter((sub) => sub.id !== id));
  };

  return (
    <>
      <Helmet>
        <title>Administrator Dashboard &middot; Tech Dictionary</title>
      </Helmet>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
        <div className="mt-6">
          {submissions.length === 0 ? (
            <>
              <div className="my-5">
                <Reaction type="bad" className="mx-auto" />
              </div>
              <p className="text-center">No submissions pending approval.</p>
              <p className="text-center">
                Go back to{" "}
                <Link className="underline" to={"/"}>
                  home
                </Link>
              </p>
            </>
          ) : (
            submissions.map((sub) => (
              <div
                key={sub.id}
                className="p-4 mb-4 border border-gray-300 rounded"
              >
                <h2 className="font-semibold">{sub.term}</h2>
                <p>{sub.description}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(sub.id)}
                    className="mt-2 bg-green-400 hover:bg-green-500 transition-colors duration-300 ease-in-out text-white p-2 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(sub.id)}
                    className="mt-2 bg-red-400 hover:bg-red-500 transition-colors duration-300 ease-in-out text-white p-2 rounded"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;

// import React, { useEffect, useState } from "react";

// function Admin() {
//   const [submissions, setSubmissions] = useState([]);

//   useEffect(() => {
//     // Simulate fetching submissions from Firebase Firestore
//     const mockSubmissions = [
//       { id: 1, term: "API", description: "Application Programming Interface" },
//       { id: 2, term: "CDN", description: "Content Delivery Network" },
//     ];
//     setSubmissions(mockSubmissions);
//   }, []);

//   const handleApprove = (id) => {
//     // Simulate approving submission
//     setSubmissions(submissions.filter((sub) => sub.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
//       <div className="mt-6">
//         {submissions.length === 0 ? (
//           <p className="text-center">No submissions pending approval.</p>
//         ) : (
//           submissions.map((sub) => (
//             <div
//               key={sub.id}
//               className="p-4 mb-4 border border-gray-300 rounded"
//             >
//               <h2 className="font-semibold">{sub.term}</h2>
//               <p>{sub.description}</p>
//               <button
//                 onClick={() => handleApprove(sub.id)}
//                 className="mt-2 bg-blue-500 text-white p-2 rounded"
//               >
//                 Approve
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Admin;
