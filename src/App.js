import { HashRouter, Route, Routes } from "react-router";
import { CalculatorPromo } from "./pages/CalculatorPromo";
import { Parameters } from "./pages/Parameters";

function App() {
  return (
    <section className="calculator">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<CalculatorPromo />} />
          <Route path="/calculate" element={<Parameters />} />
        </Routes>
      </HashRouter>
    </section>
  );
}

export default App;
