import "./App.css";
import { initializeApp } from "firebase/app";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
console.log({ app });

function App() {
  return (
    // text-[#CBE1EA]
    // bg-[#CBE1EA]

    <Router>
      <div className="flex flex-col min-h-[80vh] max-h-[90vh] md:min-h-screen md:max-h-screen">
        <Header />
        <main className="flex-grow overflow-y-auto bg-[var(--secondary-color)]">
          <div className="container mx-auto">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
