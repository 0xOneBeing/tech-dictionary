import "./App.css";
import { initializeApp } from "firebase/app";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import SubmitWord from "./pages/SubmitWord/SubmitWord";
import Admin from "./pages/Admin/Admin";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
console.log({ app });

function App() {
  return (
    // <div className="mx-auto">
    //   <div className="container mx-auto">
    //     <div className="bg-white rounded-full mt-3 p-4 text-center sticky">
    //       <p className="mb-0">Tech Dictionary</p>
    //     </div>
    //   </div>
    // </div>
    <Router>
      <div className="min-h-screen bg-[#132631] text-[#CBE1EA]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitWord />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
