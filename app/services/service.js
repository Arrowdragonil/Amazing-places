  export const getPlaces = async (param) => {
    
    //fragmento de codigo donde se hace una peticion la cual racupera la info de min db. param indica el parametro que quiero recuperar
    
        //hara una peticion a traves de un fetch
        try {
            const data = await fetch(`http://localhost:3000/lugares/${param}`);
           //una vez tenemos el const data, hay que transformarlo a Json 
            const dataToJson = await data.json();
            return dataToJson;
        }catch (error) {
          return TemplateError(error);
           
        }
    }
    const TemplateError = (error) => `<div>${error}</div>`;