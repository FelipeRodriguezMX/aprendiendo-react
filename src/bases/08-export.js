import { heroes} from '../data/heroes.js';

const getHeroesById = (id) => heroes.find(heroe => heroe.id === id);
const getHeroesByOwner = (owner) => heroes.find(heroe => heroe.owner === owner);


export {getHeroesById, getHeroesByOwner};