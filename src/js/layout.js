import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";

import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Background from "./views/Background";
import CharacterCard from "./views/CharacterCard";
import VehicleCard from "./views/VehicleCard";
import PlanetCard from "./views/PlanetCard";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
console.log("Layout cargado");

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Background />
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Character/:id" element={<CharacterCard />} />
          <Route path="/Vehicle/:id" element={<VehicleCard />} />
          <Route path="/Planet/:id" element={<PlanetCard />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
