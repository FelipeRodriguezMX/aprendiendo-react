const palabras = ['felipe','deltax','charlie', 'bravo'];

const [ , ,p3] = palabras;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros);

const useStat = (valor) =>{
    return [valor, () =>{console.log('hola mundo')}];
}
//const arr = useStat('felipe');

const [nombre, setNombre] = useStat('felipe');
console.log(nombre);
setNombre();


