function CardRazasPerros({ nombreRazas, imagen }) {
    return (
        <li className="breedCard backgroundRojo">
            <div className="contenedorImagenes">
                <img src={imagen} alt={nombreRazas} />
            </div>
            <span className="breedTitle ">{nombreRazas}</span>
        </li>
    )
}

export default CardRazasPerros;