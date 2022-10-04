import "../css/Banner.css";
import WWE from "../asset/WWE.png"
function Banner() {
    return (
        <div className="banner">
            <img src={WWE} className="logo" alt="logo Ipssi"/>
            <h1>Wekos Auto</h1>
            <div className="link">
                <h2>Produit</h2>
                <h2>Contact</h2>
            </div>
        </div>
    )
}

export default Banner;