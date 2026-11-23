 import { Route, Routes } from "react-router";
import MainLayout from "/src/layouts/MainLayout";
import Home from "/src/components/Home";
import About from "/src/components/About";
import Services from "/src/components/Services";
//import ServiceDetail from "/src/components/ServiceDetails";
import NotFound from "/src/components/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/services/:slug" element={<ServiceDetail />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}