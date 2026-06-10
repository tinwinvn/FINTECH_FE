import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";
import { ComponentShowcase } from "../page/component/ComponentShowcase";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
              <h1 className="font-sans text-[32px] font-bold uppercase text-brand-navy mb-4">
                IFISD
              </h1>
              <p className="font-sans text-[16px] text-text-secondary">
                Viện Nghiên cứu - Đào tạo FinTech, Đổi mới sáng tạo và Phát triển bền vững
              </p>
            </div>
          </MainLayout>
        }
      />
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
