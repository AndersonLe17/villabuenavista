import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import DetailsRoom from "./pages/DetailsRoom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/detail-room"} element={<DetailsRoom/>} />
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/dashboard/*"} element={<Dashboard/>} />
          <Route path={"/register"} element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;