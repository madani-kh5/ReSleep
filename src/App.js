import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact";
import Relaxation from "./pages/Relaxation";
import SleepHandle from "./pages/SleepHandle";
import Welcome from "./pages/Welcome";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Sleepcycles" element={<SleepHandle />} />
        <Route path="/relaxation" element={<Relaxation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
