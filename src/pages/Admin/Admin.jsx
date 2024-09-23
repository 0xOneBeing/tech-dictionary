import React, { useState } from "react";
import { terms } from "../../mock_db/term"; // Import the local data
import { Helmet } from "react-helmet";

function Admin() {
  const [submissions, setSubmissions] = useState(terms); // Use terms array as submissions

  const handleApprove = (id) => {
    // Simulate approving by removing from the list
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
            <p className="text-center">No submissions pending approval.</p>
          ) : (
            submissions.map((sub) => (
              <div
                key={sub.id}
                className="p-4 mb-4 border border-gray-300 rounded"
              >
                <h2 className="font-semibold">{sub.term}</h2>
                <p>{sub.description}</p>
                <button
                  onClick={() => handleApprove(sub.id)}
                  className="mt-2 bg-blue-500 hover:bg-red-400 text-white p-2 rounded"
                >
                  Approve
                </button>
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
