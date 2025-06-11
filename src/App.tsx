import { Routes, Route } from "react-router-dom";
import HooksComp from "./pages/effect&state/hooks";
import "./App.css";
import MemoComp from "./pages/useMemo/useMemo";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HooksComp />} />
        <Route path="/use-memo" element={<MemoComp />} />
      </Routes>
    </div>
  );
};

export default App;
