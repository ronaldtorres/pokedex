import { Route, Routes } from "react-router-dom";
import { Home, Details } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<Details />} />
      <Route path="*" element={<div>Route not found</div>} />
    </Routes>
  );
};
