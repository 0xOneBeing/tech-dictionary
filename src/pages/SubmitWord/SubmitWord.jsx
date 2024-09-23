import React, { useState } from "react";
import { Helmet } from "react-helmet";

function SubmitWord() {
  const [term, setTerm] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission (doesn't persist in local file)
    console.log({ term, description }); // This will log the submission to the console
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Submit a New Word &middot; Tech Dictionary</title>
      </Helmet>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center">Submit a New Word</h1>
        {submitted ? (
          <p className="text-center text-green-500 mt-4">
            Your submission is under review.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Enter word"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <textarea
              placeholder="Enter description"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              type="submit"
              className="w-full p-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default SubmitWord;

// import React, { useState } from "react";

// function SubmitWord() {
//   const [term, setTerm] = useState("");
//   const [description, setDescription] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Simulate saving to Firebase Firestore
//     setSubmitted(true);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center">Submit a New Word</h1>
//       {submitted ? (
//         <p className="text-center text-green-500 mt-4">
//           Your submission is under review.
//         </p>
//       ) : (
//         <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto">
//           <input
//             type="text"
//             placeholder="Enter word"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             value={term}
//             onChange={(e) => setTerm(e.target.value)}
//           />
//           <textarea
//             placeholder="Enter description"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="w-full p-2 bg-green-500 text-white rounded"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default SubmitWord;
