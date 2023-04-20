import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Advertise } from "../pages/Advertise";
import { Login } from "../pages/login";
import { AdvertiserPage } from "../pages/AdvertiserDetail";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/advertise" element={<Advertise />} />
      <Route path="/profile/:id" element={<AdvertiserPage />} />
    </Routes>
  );
};
