import { Route, Routes } from "react-router-dom";
import "../css/App.css";

import Banner from "./Banner";
import Contact from "./contact/Contact";
import Footer from "./Footer";
import Produit from "./produit/Produit";
import Team from "./our-team/Team";
import Accueil from "./accueil/Accueil";

function App() {
  return (
    <div>
      <Banner />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/produit" element={<Produit />}></Route>
        <Route path="/notre-equipe" element={<Team />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
