import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Advertise } from "../pages/Advertise";
import { DetailsAdvertise } from "../pages/DetailsAdvertise";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/advertise" element={<Advertise />} />
      <Route path="/detail" element={<DetailsAdvertise />} />
    </Routes>
  );
};
