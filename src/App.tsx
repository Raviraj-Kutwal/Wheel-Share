import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import VehicleModels from "./pages/VehicleModels";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import HomePhone from "./pages/HomePhone";
import VehiclePhone from "./pages/VehiclePhone";
import TestPhone from "./pages/TestPhone";
import AboutPhone from "./pages/AboutPhone";
import CantactPhone from "./pages/CantactPhone";
import TeamPhone from "./pages/TeamPhone";
import NavMenu from "./pages/NavMenu";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/vehicle-models":
        title = "";
        metaDescription = "";
        break;
      case "/testimonials":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/our-team":
        title = "";
        metaDescription = "";
        break;
      case "/homephone":
        title = "";
        metaDescription = "";
        break;
      case "/vehiclephone":
        title = "";
        metaDescription = "";
        break;
      case "/testphone":
        title = "";
        metaDescription = "";
        break;
      case "/aboutphone":
        title = "";
        metaDescription = "";
        break;
      case "/cantactphone":
        title = "";
        metaDescription = "";
        break;
      case "/teamphone":
        title = "";
        metaDescription = "";
        break;
      case "/nav-menu":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicle-models" element={<VehicleModels />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/homephone" element={<HomePhone />} />
      <Route path="/vehiclephone" element={<VehiclePhone />} />
      <Route path="/testphone" element={<TestPhone />} />
      <Route path="/aboutphone" element={<AboutPhone />} />
      <Route path="/cantactphone" element={<CantactPhone />} />
      <Route path="/teamphone" element={<TeamPhone />} />
      <Route path="/nav-menu" element={<NavMenu />} />
    </Routes>
  );
}
export default App;
