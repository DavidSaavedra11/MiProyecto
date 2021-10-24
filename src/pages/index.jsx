import CardRazasPerros from "Components/CardRazasPerros";
import borderCollie from 'Media/BorderCollie.jpg';
import huskey from 'Media/Huskey.jpg';



function Index() {
    return (
        
            <section>
                <h1>Razas de Perros</h1>
                <ul className="breedCardContainer">
                    <CardRazasPerros nombreRazas='BorderCollie' imagen={borderCollie} />
                    <CardRazasPerros nombreRazas='Huskey' imagen={huskey} />
                    <CardRazasPerros nombreRazas='Huskey' imagen={huskey} />
                    <CardRazasPerros nombreRazas='Huskey' imagen={huskey} />
                    <CardRazasPerros nombreRazas='Huskey' imagen={huskey} />
                </ul>
            </section>
 
     
    )
}

export default Index;