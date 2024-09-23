import "./App.css";
import { initializeApp } from "firebase/app";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes";

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
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
