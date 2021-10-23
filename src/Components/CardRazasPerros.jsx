import { Link } from "react-router-dom";

function CardRazasPerros({ nombreRazas, imagen }) {
    return (
        <li className="breedCard backgroundRojo">
            <Link to='/huskey'>
                <div className="contenedorImagenes">
                    <img src={imagen} alt={nombreRazas} />
                </div>
            </Link>
            <span className="breedTitle ">{nombreRazas}</span>
        </li>
    )
}

export default CardRazasPerros;