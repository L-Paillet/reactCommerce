import { useParams } from "react-router-dom"

export default function LeProduit(props){
    const { id } = useParams()
    return(
        <div>
            {props.param.map((produit)=>(
                 id === produit.id ?
                <div> hello {produit.nom} </div>
                : ''
            ))}
        </div>
    )
}