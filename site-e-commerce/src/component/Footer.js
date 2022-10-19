import "../css/Footer.css";
import { Link } from "react-router-dom";
// import WWE from "../asset/WWE.png";
// import GIT from "../asset/Octocat.png";


function Footer() {
    const numero = "06.12.34.56.78";
    const site = "https://github.com/L-Paillet/reactCommerce";
    const School = "https://ecole-ipssi.com/";
    return (
        <div className="footer">
            {/* <img src={WWE} className="logoFooter" alt="logo Ipssi"/> */}
            <div className="containerCard">
                <div className="cardFooter">
                    <h4>
                        Compléments d'informations
                    </h4>
                    <ul className="liste">
                        <li> numéro : {numero}</li>
                        <li> site officiel: <a href={School} target="_blank" rel="noreferrer">IPSSI</a></li>
                    </ul>
                </div>
                <div className="cardFooter">
                    <h4>
                        Notre équipe
                    </h4>
                    <p className="liste">
                        <li><Link className="linkStyle" to="/notre-equipe">A propos de nous</Link></li>
                        <li> Github: <a href={site} target="_blank" rel="noreferrer">
                            {/* <img className="logoGit" src={GIT} alt="logo GIT"/> */}
                            </a></li>
                    </p>
                </div>
                <div className="cardFooter">
                    <h4>
                        Nous contactez
                    </h4>
                    <ul className="liste">
                        <p><Link className="linkStyle" to="/contact">Contact</Link></p>
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