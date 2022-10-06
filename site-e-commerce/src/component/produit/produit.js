import "../../css/Produit.css";
import organizer from "../../asset/BackseatOrganizer.jpg";
import protector from "../../asset/BackseatPortector.jpg";
import cupholder from "../../asset/cupholder.jpg";
import cushion from "../../asset/SeatBeltCushion.jpg";
import SkullFreshener from "../../asset/SkullFreshener.jpg";
import SteeringNaruto from "../../asset/SteeringNaruto.jpg";
import carMirror from "../../asset/carMirror.webp";
import SwingingOrnament from "../../asset/SwingingOrnament.jpg";

function Produit() {
    const organisateur = "https://www.amazon.com/Helteko-Backseat-Car-Organizer-Accessories/dp/B07RNZV64Y/ref=sr_1_2?keywords=Car+Rear+Seat+Organizer&qid=1665064769&qu=eyJxc2MiOiI2LjE4IiwicXNhIjoiNS43MCIsInFzcCI6IjQuOTIifQ%3D%3D&sr=8-2"
    return (
        <div className="bodyProduit">
            <div class="parent">

                <div class="div1">
                    <img href={organisateur} target="_blank" rel="noreferrer" className="products" src={organizer} alt="img produit"/>
                    <div className="textProduit">
                        <h3>Organisateur attachable</h3>
                        <p>Organisé votre bordel avec cet organisateur multi-poche!</p>
                    </div>
                    {/* <div>
                        <a href={organisateur} target="_blank" rel="noreferrer">Voir Plus</a>
                    </div> */}
                </div>

                <div class="div2">
                    <img className="products" src={protector} alt="img produit"/>
                    <div className="textProduit">
                        <h3>Housse protectrice</h3>
                        <p>Protéger votre voiture du toutou de mami</p>
                    </div>
                    {/* <div>
                        <a href={organisateur} target="_blank" rel="noreferrer">Voir Plus</a>
                    </div> */}
                </div>

                <div class="div3">
                    <img className="products" src={cupholder} alt="img produit"/>
                    <div className="textProduit">
                        <h3>Sous-verre</h3>
                        <p>Sous-verre absorbant</p>
                    </div>
                </div>

                <div class="div4">
                    <img className="products" src={cushion} alt="img produit"/>
                    <div className="textProduit">
                        <h3>Housse protectrice</h3>
                        <p>pour un contact plus doux avec l'épaule</p>
                    </div>
                </div>

                <div class="div5">
                    <img className="products" src={SkullFreshener} alt="img produit"/>
                    <div className="textProduit">
                        <h3>Déodorisant</h3>
                        <p>Effacer l'odeur de vos grand mort</p>
                    </div>
                </div>

                <div class="div6">
                    <img className="products" src={SteeringNaruto} alt="img produit"/>
                    <div className="textProduit">
                        <h3>Housse de volant</h3>
                        <p>Un volant plus stylé avec naruto</p>
                    </div>
                </div>

                <div class="div7">
                    <img className="products" src={carMirror} alt="img produit"/>
                    <div className="textProduit">
                        <h3>Mirroir de rétro</h3>
                        <p>Pour voir en reculant</p>
                    </div>
                </div>

                <div class="div8">
                    <img className="products" src={SwingingOrnament} alt="img produit"/>
                    <div className="textProduit">
                        <h3>Canard</h3>
                        <p>Un canard stylé sur une balançoire</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produit;