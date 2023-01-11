// calculando a média sem o for
const notas = [6, 7.5, 8, 10]
//const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
//console.log(media)

// com o for
let somaDasNotas = 0; // cria uma variável com o valor de 0 para ser usada dentro do for

for (i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i] 

    console.log(somaDasNotas)
}
// notas[i] representa a posição 0 que representa o elemento 6
// variável somaDasNotas inicia com o valor de 6 dentro do for e a cada repetição ele soma com o valor do próximo índice e o e assume o resultado como seu valor atual. Essas interações se repetem até que a segunda expressão do for - que é a expressão de condição - retorne false
// se console.log(somaDasNotas) ou console.log(media) for executado dentro do for ele exibira todo o percuso do loop até o resultado final
const media = somaDasNotas / notas.length
console.log(`A media das notas é ${media}`)


// com for of
const notasForOf = [6.5, 7, 9, 12]
let somaForOf = 0
// percorre a array do início ao fim e pega diretamente o valor de cada elemento
for (let nota of notasForOf) { // faz o mesmo que o for tradicional com algumas instruções automatizadas, porém é menos flexível
    //console.log(nota)
    somaForOf += nota
}

console.log(`A media das notas é ${somaForOf / notasForOf.length}`) 