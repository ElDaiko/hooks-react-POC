import { Routes, Route } from "react-router-dom";
import HooksComp from "./pages/effect&state/hooks";
import "./App.css";
import MemoComp from "./pages/useMemo/useMemo";
import CallbackComp from "./pages/useCallback";
import UseContext from "./pages/useContext";
import UseRefComp from "./pages/useRef/useRefComp";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HooksComp />} />
        <Route path="/use-memo" element={<MemoComp />} />
        <Route path="/use-callback" element={<CallbackComp />} />
        <Route path="/use-context" element={<UseContext />} />
        <Route path="/use-ref" element={<UseRefComp />} />
      </Routes>
    </div>
  );
};

export default App;
