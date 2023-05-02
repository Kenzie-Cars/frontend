import { Route, Routes } from "react-router-dom";
import { Advertise } from "../pages/Advertise";
import { DetailsAdvertise } from "../pages/DetailsAdvertise";
import { HomePage } from "../pages/HomePage";
import Register from "../pages/Register";
import { Login } from "../pages/login";
import { AdvertiserPage } from "../pages/AdvertiserDetail";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:id" element={<AdvertiserPage />} />
      {/* <Route path="/advertise/:id" element={<Advertise />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/detail" element={<DetailsAdvertise />} />
    </Routes>
  );
};
