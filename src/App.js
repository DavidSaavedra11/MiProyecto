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
            <img className="logo" src={logo} alt="imagen"/>
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

            <li className="breedCard">
              <div className="contenedorImagenes">
                <img src={borderCollie} alt="Border Collie"/>
              </div>
              <span className="breedTitle">Border Collie</span>
            </li>

            <li className="breedCard">
              <div className="contenedorImagenes">
                <img src={huskey} alt="Huskey"/>
              </div>
              <span className="breedTitle">Huskey</span>
            </li>

            <li>Raza3</li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
