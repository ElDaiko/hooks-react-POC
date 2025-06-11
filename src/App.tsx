import { Routes, Route } from "react-router-dom";
import HooksComp from "./pages/hooks";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HooksComp />} />
      </Routes>
    </div>
  );
};

export default App;
