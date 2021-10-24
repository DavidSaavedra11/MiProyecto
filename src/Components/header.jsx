import logo from 'Media/LogoArdilla3.png';

const Header =()=> {
    return (
        <header>
            <ul className="barraNavegacion">
                <li>
                    <img className="logo" src={logo} alt="imagen" />
                </li>

                <li>
                    <button className="mainButton button">Nuevo Post</button>
                </li>

                <li>
                    <div className="buscar">
                        <input type="text" placeholder="Buscar una raza" />
                        <i className="fas fa-search button iconobusqueda"></i>
                    </div>
                </li>

                <li>
                    <button className="secundaryButtom button">Iniciar Sesion</button>
                </li>

                <li>
                    <button className="mainButton button">Registrarme</button>
                </li>
            </ul>
        </header>
    )
}

export default Header;