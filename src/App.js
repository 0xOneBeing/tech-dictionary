import { initializeApp } from "firebase/app";

import "./App.css";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="container mx-auto px-4">
      <p>It works!!!</p>
    </div>
  );
}

export default App;
