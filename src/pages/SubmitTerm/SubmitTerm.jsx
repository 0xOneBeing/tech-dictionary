import { useState } from "react";
import { Helmet } from "react-helmet";
import Reaction from "../../components/Reaction/Reaction";
import { Link } from "react-router-dom";
import { Input, Tag } from "antd";
import { FormOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

function SubmitTerm() {
  const [term, setTerm] = useState("");
  const [description, setDescription] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [exampleUsage, setExampleUsage] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryInput = (e) => {
    const trimmedCategory = category.trim().toLowerCase();

    if ((e.key === " " || e.key === ",") && trimmedCategory) {
      e.preventDefault();
      if (trimmedCategory !== "" && !categories.includes(trimmedCategory)) {
        setCategories([...categories, trimmedCategory]);
      } else {
        toast.error(`Category "${trimmedCategory}" already exists!`);
      }
      setCategory("");
    }
  };

  const handleRemoveCategory = (removedCategory) => {
    setCategories(categories.filter((cat) => cat !== removedCategory));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      term,
      description,
      partOfSpeech,
      exampleUsage,
      category: categories,
    };

    toast.success(`"${submissionData?.term}" successfully added!`);

    console.log(submissionData);

    setSubmitted(true);
  };

  // Example toast trigger with dismiss button
  // const triggerToast = () => {
  //   toast((t) => (
  //     <div>
  //       <span>Category already exists!</span>
  //       <button
  //         onClick={() => toast.dismiss(t.id)} // Dismisses the specific toast
  //         className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
  //       >
  //         Dismiss
  //       </button>
  //     </div>
  //   ));
  // };

  return (
    <>
      <Helmet>
        <title>Submit a New Term &middot; Tech Dictionary</title>
      </Helmet>

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 10000,
          style: {
            background: "var(--primary-color)",
            color: "var(--secondary-color)",
            fontSize: "14px",
            border: "2px solid var(--secondary-color)",
            borderRadius: "8px",
          },

          error: {
            // style: {
            //   background: "#ff4d4f",
            //   color: "#fff",
            // },
            iconTheme: {
              primary: "#ff4d4f",
              secondary: "#fff",
            },
          },

          success: {
            // style: {
            //   background: "#52c41a",
            //   color: "#fff",
            // },
            iconTheme: {
              primary: "#52c41a",
              secondary: "#fff",
            },
          },
        }}
      />

      {/* <button onClick={triggerToast}>Show Toast</button> */}

      <div className="p-6">
        <h1 className="text-2xl font-bold text-center">Submit a New Term</h1>
        {submitted ? (
          <>
            <div className="my-5">
              <Reaction type="good" className="mx-auto" />
            </div>
            <p className="text-center text-green-500 mt-4">
              Your submission is under review.
            </p>
            <p className="text-center">
              Go back to{" "}
              <Link className="underline" to={"/"}>
                home
              </Link>
            </p>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 max-w-lg mx-auto">
            <div className="mb-1">
              <h3 className="mb-1">
                Term <i className="text-red-500 font-bold">*</i>
              </h3>
              <Input
                type="text"
                placeholder="Enter a term"
                required
                className="placeholder:text-[var(--primary-color)] w-full p-2 border rounded mb-4"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>

            <div className="mb-1">
              <h3 className="mb-1">
                Description <i className="text-red-500 font-bold">*</i>
              </h3>
              <Input.TextArea
                placeholder="Describe the term"
                required
                className="placeholder:text-[var(--primary-color)] w-full p-2 border rounded mb-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-1">
              <h3 className="mb-1">
                Part of Speech <i className="text-red-500 font-bold">*</i>
              </h3>
              <Input
                type="text"
                placeholder="Enter part of speech (e.g., noun, verb)"
                required
                className="placeholder:text-[var(--primary-color)] w-full p-2 border rounded mb-4"
                value={partOfSpeech}
                onChange={(e) => setPartOfSpeech(e.target.value)}
              />
            </div>

            <div className="mb-1">
              <h3 className="mb-1">
                Example Usage <i className="text-red-500 font-bold">*</i>
              </h3>
              <Input.TextArea
                placeholder="Enter an example usage of the term"
                required
                className="placeholder:text-[var(--primary-color)] w-full p-2 border rounded mb-4"
                value={exampleUsage}
                onChange={(e) => setExampleUsage(e.target.value)}
              />
            </div>

            <div className="mb-1">
              <h3 className="mb-1">
                Categories <i className="text-red-500 font-bold">*</i>: &nbsp;
                {categories.map((cat, index) => (
                  <Tag
                    key={index}
                    closable
                    required
                    onClose={() => handleRemoveCategory(cat)}
                    className="mr-1 mb-1 bg-[var(--primary-color)] text-[var(--secondary-color)]"
                  >
                    <FormOutlined />
                    &nbsp;{cat.toLowerCase()}
                  </Tag>
                ))}
              </h3>

              <Input
                type="text"
                placeholder="Enter the term category and press the 'space' or 'comma' keys"
                // required
                // className="flex-grow min-w-[200px] border-none mb-4"
                className="placeholder:text-[var(--primary-color)] border-b-[var(--primary-color)] hover:border-b-[var(--primary-color)] active:border-b-[var(--primary-color)] focus:border-b-[var(--primary-color)] target:border-b-[var(--primary-color)] focus-within:border-b-[var(--primary-color)] focus-visible:border-b-[var(--primary-color)] bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent focus-within:bg-transparent hover:border-[transparent] active:border-[transparent] focus:border-[transparent] focus-within:border-[transparent] w-full p-2 border rounded mb-4"
                value={category}
                // value={category.toLowerCase()}
                onChange={(e) => setCategory(e.target.value)}
                onKeyDown={handleCategoryInput}
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-green-400 hover:bg-green-500 transition-colors duration-300 ease-in-out text-white rounded"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default SubmitTerm;
