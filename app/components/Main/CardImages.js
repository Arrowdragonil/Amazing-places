const container = document.querySelector('.container');


// Naming de funcion para llamarlo desde el app;
export const initPLaces = () => {
  getPlaces();
}

// Declaramos una función asincrona -> necisitamos el async antes de los ()
const getPlaces = async () => {
  // Definimos el Try Catch para intentar recuperar los datos y sino capturar el error
  try {
    // Lanzar la petición -> await para guardarlos en la variable
    const answerPlaces = await fetch('.\server\db.json');
    // Transformar los datos a un formato legible -> Json => await para tranformar los datos y almacenarlos
    const answerPLacesJson = await answerPlaces.json();
    // Invocamos a la funcíon que mappea los datos recibidos
    transformPlaces(answerPLacesJson);
  } catch (error) {
    // Capturamos el error y lo sacamos por consola
    console.log(error)
  }
}

// Mapeamos la info de la Api con los datos que nosotros necesitamos
const transformPlaces = (places) => {
  let elementsTransformed = places.map((place) => {
    return {
        placestitle: place.title,
        image: place.img,
        place: place.place,
        description: place.description
    }
  })
  // Llammos a la función de pintado -> template 
  printPLaces(elementsTransformed);
}

// Función de pintado -> que tiene un li para capa pelicula que hay en la lista
const printPLaces = (places) => {
  places.forEach((place) => {
    // Recogemos en una variable los elementos
    const listPlaces= `
        <div class="poster">
          <img alt="gallery" class="img"
            src=${places.img}>
            <h2 class="titleimage">${places.title}</h2>
        </div>
    `;
    // Los añadimos en el contenedor -> ul
    list.innerHTML += printPLaces;
}); 
}

container.appenchild(printPLaces)