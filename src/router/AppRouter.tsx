import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../ecommerce/components/shared";
import { routes } from "./routes";
import {
  CheckoutPage,
  HomePage,
  ProductPage,
} from "../ecommerce/pages";
import { ScrollTop } from "../ecommerce/components/shared/ScrollTop";
import { AnimatePresence } from "framer-motion";

export const AppRouter = () => {
  return (
    <>
      <ScrollTop />

      <Header />

      <AnimatePresence>
        <Routes>
          {/* Ruta general */}

          <Route path="/" element={<HomePage />} />

          {routes.map(({ path, name, Component }) => {
            return <Route key={name} path={path} element={<Component />} />;
          })}

          <Route path="/product/:productId" element={<ProductPage />} />

          {/* TODO: Crear una página para el checkout */}
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Ruta que no existe */}
          <Route path="*" element={<Navigate to = '/' />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
};
