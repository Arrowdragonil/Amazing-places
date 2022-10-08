//retorna el div con la clase container
//dontro del div se tiene que poner lo que se quiera pintar
import {setupPlace} from './app/components/main/place.js'

//el templateAmazingPlaces lo tienes que importar al main.js
export const templateAmazingPlaces = async () => {
    const templatePlaces = await setupPlace(); 
return `
<div class="container">
   ${templatePlaces[0]}
</div>`
}

container.appenchild(printPLaces);