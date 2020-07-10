const nombre = 'felipe';
const apellido = 'rodriguez';

const nombreCompleto = `Hola ${nombre} ${apellido} ${1+1}`;
console.log(nombreCompleto);

function getSaludo(nombreCompleto){
    return 'Hola '+nombreCompleto;
}

console.log(`Esto es un saludo: ${getSaludo(nombre)}`);

