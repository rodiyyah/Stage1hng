import { Routes, Route } from "react-router-dom";
import { ContactPage } from "./components/ContactPage";
import { HngStageOne } from "./components/HngStageOne";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HngStageOne />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
