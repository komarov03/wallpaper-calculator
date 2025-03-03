import { BrowserRouter, Route, Routes } from "react-router";
import { CalculatorPromo } from "./pages/CalculatorPromo";
import { Parameters } from "./pages/Parameters";

function App() {
  return (
    <section className="calculator">
      <BrowserRouter basename="/wallpaper-calculator">
        <Routes>
          <Route exact path="/" element={<CalculatorPromo />} />
          <Route path="/calculate" element={<Parameters />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
