const container = document.querySelector('.container');



export const initPLaces = () => {
  getPlaces();
}

const getPlaces = async () => {
  try {
    const answerPlaces = await fetch('.\server\db.json');
    const answerPLacesJson = await answerPlaces.json(); 
    transformPlaces(answerPLacesJson);
  } catch (error) {
    console.log(error)
  }
}

const transformPlaces = (places) => {
  let elementsTransformed = places.map((place) => {
    return {
        placestitle: place.title,
        image: place.img,
        place: place.place,
        description: place.description
    }
  })
  printPLaces(elementsTransformed);
}

const printPLaces = (places) => {
  places.forEach((place) => {
    
    const listPlaces= `
        <div class="poster">
          <img alt="gallery" class="img"
            src=${places.img}>
            <h2 class="titleimage">${places.title}</h2>
        </div>`;
    list.innerHTML += printPLaces;
}); 
container.appenchild(printPLaces);
}
