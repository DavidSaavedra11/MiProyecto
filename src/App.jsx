import logo from './Media/LogoArdilla3.png';
import './Styles/styles.css';
import borderCollie from './Media/BorderCollie.jpg';
import huskey from './Media/Huskey.jpg';

function App() {
  return (
    <div className="App">
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
      <main>
        <section>
          <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
              <CardRazasPerros nombreRazas='BorderCollie' imagen={borderCollie}/>
              <CardRazasPerros nombreRazas='Huskey' imagen={huskey} />
              <CardRazasPerros nombreRazas='Huskey' imagen={huskey} />
              <CardRazasPerros nombreRazas='Huskey' imagen={huskey} />
              <CardRazasPerros nombreRazas='Huskey' imagen={huskey} />
            </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

// ------------------------------------------COMPONENTE 1
function CardRazasPerros({nombreRazas, imagen}) {
  return (
    <li className="breedCard backgroundRojo">
      <div className="contenedorImagenes">
        <img src={imagen} alt={nombreRazas} />
      </div>
      <span className="breedTitle ">{nombreRazas}</span>
    </li>
  )
}

export default App;
