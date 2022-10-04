import "../css/Banner.css";
import WWE from "../asset/WWE.png"
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className="banner">
            <img src={WWE} className="logo" alt="logo Ipssi"/>
            <h1>Wekos Auto</h1>
            <div >
            <p className="azerty"><Link to="/produit">Produit</Link>
                <Link to="/notre-equipe">Notre équipe</Link>
                <Link to="/contact">Contact</Link></p>
            </div>
        </div>
    )
}

export default Banner;