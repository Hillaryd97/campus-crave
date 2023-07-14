import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import Meals from "./pages/Meals";
import Checkout from "./pages/Checkout";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div className="w-screen bg-yellow-50">
      <div className="container mx-auto">
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          {token ? <Route path="/home" element={<Home token={token} />} /> : ""}
          <Route path="/meals" element={<Meals />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </div>
      {/* 9p4VNIDR2IkoO3UB */}
    </div>
  );
}

export default App;
