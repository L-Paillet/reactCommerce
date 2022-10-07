import "../css/Banner.css";
import WWE from "../asset/WWE.png"
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className="banner">
            <img src={WWE} className="logo" alt="logo Ipssi"/>
            <h1>Wekos Auto</h1>
            <div >
            <p ><Link to="/produit" className="azerty">Produit</Link>
                <Link to="/notre-equipe" className="azerty">Notre équipe</Link>
                <Link to="/contact" className="azerty">Contact</Link></p>
            </div>
        </div>
    )
}

export default Banner;