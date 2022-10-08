//retorna el div con la clase container
//dontro del div se tiene que poner lo que se quiera pintar
import './amazingPlacesStyle.css'
import {setupPlace} from '../../components/comPlaces/place'

//el templateAmazingPlaces lo tienes que importar al main.js
/* export const templateAmazingPlaces = async () => {
    
return `
<div id="placesContainer" class="container"></div>`
}
setupPlace(); */

//esta es una funcion que llama a otra funcion ya que se esta haciendo todo en el componente hijo
export const initAmazingPlaces = () => {
    setupPlace();
}