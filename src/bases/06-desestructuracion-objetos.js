const persona = {
    nombre: 'felipe',
    edad: 45,
    clave: 'tito'
}

// const {nombre, edad, clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({clave,edad, nombre}) =>{
    //console.log(nombre);
    return {
        nombreClave: clave,
        anos: edad,
        latlng:{
            lat:14.201,
            lng:-15.024
        }
    }
    
}

const {nombreClave, anos, latlng:{lat,lng}} =  useContext(persona);
console.log(nombreClave, anos);
console.log(lat, lng);


// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
