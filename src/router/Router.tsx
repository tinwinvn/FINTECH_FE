import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";
import { ComponentShowcase } from "../page/component/ComponentShowcase";
import { HomePage } from "../page/home/HomePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/component"
        element={
          <MainLayout>
            <ComponentShowcase />
          </MainLayout>
        }
      />
    </Routes>
  );
};
