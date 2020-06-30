// Import, export funciones

// const  heroes = require("./data/heroes");
// import heroes, { owners } from "./data/heroes";
import {heroes, owners } from "../data/heroes";

// Import default function
// import heroes from './data/heroes';
// ////////////////////////////////////////////////////////////
// Importación sin default
// import {heroes} from './data/heroes';
// ////////////////////////////////////////////////////////////


console.log('heroes', heroes );
console.log('owners', owners );

export const getHeroesById = (id) => {
     return heroes.find( (heroe) => heroe.id === id);
}

console.log(getHeroesById(5));


export const getHeroesByOwner = (owner) => {
    return heroes.filter( heroes => heroes.owner === owner);    
}





console.log(getHeroesByOwner('Marvel'));