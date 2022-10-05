import "../css/Footer.css";
import { Link } from "react-router-dom";
import WWE from "../asset/WWE.png"


function Footer() {
    const numero = "06.12.34.56.78";
    const site = "https://ecole-ipssi.com";
    return (
        <div className="footer">
            <img src={WWE} className="logoFooter" alt="logo Ipssi"/>
            <div className="containerCard">
                <div className="cardFooter">
                    <h4>
                        Compléments d'informations
                    </h4>
                    <ul className="liste">
                        <li> numéro : {numero}</li>
                        <li> site officiel: <a href={site}>IPSSI</a></li>
                    </ul>
                </div>
                <div className="cardFooter">
                    <h4>
                        Notre équipe
                    </h4>
                    <p className="liste">
                        <li><Link to="/notre-equipe">A propos de nous</Link></li>
                        <li> site officiel: <a href={site}>IPSSI</a></li>
                    </p>
                </div>
                <div className="cardFooter">
                    <h4>
                        Nous contactez
                    </h4>
                    <ul className="liste">
                        <p><Link className="linkFooter" to="/contact">Contact</Link></p>
                        <li> site officiel: <a href={site}>IPSSI</a></li>
                    </ul>
                </div>
            </div>
            <span>
                <p>Vous devez être âgé(e) d’au moins 18 ans pour faire des achats en ligne.Tous droits réservés. 
                    L'utilisation de ce site implique que vous acceptez les conditions d'utilisation.</p>
            </span>
        </div>
    )
}

export default Footer;