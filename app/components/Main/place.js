//primero hay que importar nuestros servicios que estan en la carpeta services
//import { templateAmazingPlaces } from '../../pages/amazingPlaces/amazingPlaces';
import {getPlaces} from '../../services/service'
import '../../pages/amazingPlaces/amazingPlacesStyle.css'
//una vez tengo mi , en este caso, getPlaces
//si importas el setupPlace a amazingPLaces.js te devolvera el html
export const setupPlace = async() => {
    const places = await getPlaces('places');
    console.log(places);
    const placesMap = mapListaPlace(places);
    console.log(placesMap);
}


//aqui paso un listado pero no estan pintados los elementos
const templateAmazingPlaces = (place) => {
//la parte html hay que añadirla al index ya que gracias al document.querySelector no no hace falta tenerlo aqui porque lo "llama"
    document.querySelector('#placesContainer').innerHTML += `
    
<div class="panel" style="background-image: url(${place.img})">
        <h3>${place.title}</h3>
      </div>
`
}
//ahora hay que hacer la peticionm pasar los valores en este caso a pPlace.
//y añadir los eventos

//despues hay que llamar a una funcion que nos genere x pPlaces como haya


const mapListaPlace = (lista) => {
 const places = lista.map((place) => {
    return {
        id: place.id,
        title: place.title,
        img: place.img,
        Place: place.PLace,
        Description: place.Description  
    }    
 })
    for (const place of places){
    templateAmazingPlaces(place)
 }
} 
//esta funcion mapea la informacion para devolver un html
/* const transforDataToJson = (places) => {
    return places.map((place) => pPlace(place)
    )
} */
const eventListener = () => {
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}

}