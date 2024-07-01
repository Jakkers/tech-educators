import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import "./App.css";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <div className="App">
        <h1>Welcome to my website</h1>
        <nav>
          <Link to="/about">About</Link> | <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
