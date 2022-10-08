//primero hay que importar nuestros servicios que estan en la carpeta services
import {getPlaces} from '../../services/service'

//una vez tengo mi , en este caso, getPlaces
//si importas el setupPlace a amazingPLaces.js te devolvera el html
export const setupPlace = async() => {
    const places = await getPlaces('places');
    const placesMap = mapListaPlace(places);
    console.log(places);
    const valueHtml = transformDataToHtml(places);
    console.log(valueHtml);
}


//aqui paso un listado pero no estan pintados los elementos
const pPlace = ({place}) => `
<div class="panel" style="background-image: url(${place.image})">
        <h3>${place.title}</h3>
      </div>
`
//ahora hay que hacer la peticionm pasar los valores en este caso a pPlace.
//y añadir los eventos

//despues hay que llamar a una funcion que nos genere x pPlaces como haya


const mapListaPlace = (lista) => {
 return lista.map((place) => {
    return {
        id: place.id,
        title: place.title,
        img: place.img,
        Place: place.PLace,
        Description: place.Description  
    }    
 })
} 
//esta funcion mapea la informacion para devolver un html
const transforDataToJson = (places) => {
    return places.map((place) => pPlace(place)
    )
}

setupPlace();
transforDataToJson();
