import { Routes, Route } from "react-router-dom";
import UseStateComp from "./pages/useState/useStateComp";
import UseEffectComp from "./pages/useEfect/useEffectComp";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Hola escribe "use-" seguido de el hook que quieres probar para
              hacer el recorrido completo por los hooks de react EJM: use-state
            </div>
          }
        />
        <Route path="/use-state" element={<UseStateComp />} />
        <Route path="/use-effect" element={<UseEffectComp />} />
      </Routes>
    </div>
  );
};

export default App;
