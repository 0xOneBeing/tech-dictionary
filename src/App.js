import "./App.css";
import { initializeApp } from "firebase/app";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes";

// import Home from "./pages/Home/Home";
// import SubmitWord from "./pages/SubmitWord/SubmitWord";
// import Admin from "./pages/Admin/Admin";
// import TermPage from "./pages/TermPage/TermPage";
// import NotFound from "./pages/NotFound/NotFound";

// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
console.log({ app });

function App() {
  return (
    // text-[#CBE1EA]

    <Router>
      <div className="min-h-screen bg-[#132631]">
        {/* <Header /> */}
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {/* <Route path="/" element={<Home />} />
          <Route path="/submit-word" element={<SubmitWord />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dictionary/:term" element={<TermPage />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
