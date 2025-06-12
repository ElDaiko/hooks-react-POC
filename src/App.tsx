import { Routes, Route } from "react-router-dom";
import HooksComp from "./pages/effect&state/hooks";
import "./App.css";
import MemoComp from "./pages/useMemo/useMemo";
import CallbackComp from "./pages/useCallback";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HooksComp />} />
        <Route path="/use-memo" element={<MemoComp />} />
        <Route path="/use-callback" element={<CallbackComp />} />
      </Routes>
    </div>
  );
};

export default App;
