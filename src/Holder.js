import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./components/signup/Signup";

const Holder = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/blog" element={<App />} />
        </Routes>
      </Router>
    </>
  );
};
export default Holder;
