import { Route, Routes } from 'react-router-dom';
import '../css/App.css';
import organizer from "../asset/BackseatOrganizer.jpg";

import Banner from './Banner'
import Contact from './contact/Contact';
import Footer from './Footer'
import Produit from './produit/Produit';
import Team from './our-team/Team';

function App() {
  const produits =[
    {
      id : 1,
      nom: "Organisateur attachable",
      img: organizer,
      desc: "Organisé votre bordel avec cet organisateur multi-poche!"
    },
  ]
  return (
    <div>
      <Banner />
        <Routes>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/produit" element={<Produit param={produits}/>}></Route>
          <Route path="/notre-equipe" element={<Team/>}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
