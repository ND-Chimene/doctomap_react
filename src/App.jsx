import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Error from "./pages/Error";
import Login from "./pages/Login";

function App() {
  let token = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<Doctor />} />
          <Route path="/login" element={!token ? <Login /> : <Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
