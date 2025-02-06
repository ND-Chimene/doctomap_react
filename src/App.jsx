import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/doctor/:id" element={< Doctor/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
