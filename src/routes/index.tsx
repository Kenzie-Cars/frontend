import { Route, Routes } from "react-router-dom";
import { Advertise } from "../pages/Advertise";
import { HomePage } from "../pages/HomePage";
import Register from "../pages/Register";
import { Login } from "../pages/login";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/advertise" element={<Advertise />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};
