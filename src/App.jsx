import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/Projects";

export const App = () => {
  return (
    <div className="text-gray-200 bg-zinc-950 font-rubik">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </div>
  );
};
