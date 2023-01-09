// média das notas com o método forEach
const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0;

// função callback
notas.forEach((nota, indice, lista) => {
    somaDasNotas += nota
    console.log(nota, indice, lista)
})
// obs a função no método forEach precisa de pelo menos 1 argumento para que através de sua lógica, percorrer os elementos da array
const media = somaDasNotas / notas.length
console.log(`A media das notas é ${media}.`)