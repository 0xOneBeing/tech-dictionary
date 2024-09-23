// import React, { useState } from "react";
// import { terms } from "../../mock_db/term"; // Import the local data

// function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [result, setResult] = useState(null);

//   const handleSearch = () => {
//     const foundTerm = terms.find(
//       (termObj) => termObj.term.toLowerCase() === searchTerm.toLowerCase()
//     );
//     setResult(
//       foundTerm || {
//         term: searchTerm,
//         description: "Term not found in the dictionary.",
//       }
//     );
//   };

//   return (
//     <div className="p-6">
//       <div className="container mx-auto">
//         <div className="mt-8 flex justify-center">
//           <input
//             type="text"
//             placeholder="Search for a term..."
//             className="p-2 border border-gray-300 rounded-full w-[100%]"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button
//             onClick={handleSearch}
//             className="ml-2 p-2 bg-blue-500 text-white rounded"
//           >
//             Search
//           </button>
//         </div>
//         {result && (
//           <div className="mt-4 text-center text-cyan-100">
//             <h2 className="text-xl font-semibold">{result.term}</h2>
//             <p>{result.description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;

// -----------------------------------------
// Demarkation
// -----------------------------------------

// import React, { useState } from "react";

// function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [result, setResult] = useState(null);

//   const handleSearch = async () => {
//     // Simulate a search in Firebase Firestore
//     const mockResult = {
//       term: searchTerm,
//       definition: "Sample definition for " + searchTerm,
//     };
//     setResult(mockResult);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center">Tech Dictionary</h1>
//       <div className="mt-8 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search for a term..."
//           className="p-2 border border-gray-300 rounded"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button
//           onClick={handleSearch}
//           className="ml-2 p-2 bg-blue-500 text-white rounded"
//         >
//           Search
//         </button>
//       </div>
//       {result && (
//         <div className="mt-4 text-center">
//           <h2 className="text-xl font-semibold">{result.term}</h2>
//           <p>{result.definition}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

// -------------------------------------
// Demarkation
// -------------------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/dictionary/${searchTerm}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Tech Dictionary</h1>
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          placeholder="Search for a term..."
          className="p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;
