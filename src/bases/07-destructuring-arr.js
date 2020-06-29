// Destructuración Arreglos JS
// Asignación Desestructurante Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log('personajes', personajes);

const [,, p3 ] = personajes;
console.log(p3);

const retornoArreglo = ()=>{
    return ['ABC', 123];
}

const [letras, numeros] = retornoArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = (valor) => {
    return [valor, ()=>{ console.log('Hola ') } ];
};

const arr = useState('Goku');
const [nombre, setNombre] = arr;
console.log(nombre)
setNombre();


