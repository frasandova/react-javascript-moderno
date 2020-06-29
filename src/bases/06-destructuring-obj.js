// Destructuración JS
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'    
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre:nombre2, edad, clave} = persona

console.log(nombre2);
console.log(edad);
console.log(clave);

const useContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
    // console.log( nombre, edad, rango );

    return{
        nombreClave: clave,
        anios: edad,
        lating:{
            lat: 14.1234,
            lng: -12.3232
        }
    }
}

const avenger = useContext( persona );

console.log(avenger);
// const { nombreClave, anios, lating } = avenger;
const { nombreClave, anios, lating:{ lat , lng } } = avenger;

console.log(nombreClave, anios);
console.log(lat, lng);

