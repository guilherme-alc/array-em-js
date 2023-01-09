// map é um método utilizado para reescrever os valores de arrays
const notas = [10, 9.5, 8, 7, 6];
// ele não altera a array original portanto é necessário criar uma nova variável pra exibir o resultado
const notasAtualizadas = notas.map((nota) => {
    return nota >= 10 ? 10 : nota + 1;
    // usando operador ternário
})
console.log(notasAtualizadas)

// alterando strings com map
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

const nomesPadronizados = nomes.map((nome) => {
     return nome.toUpperCase()
})
console.log(nomesPadronizados)

// como a arrow function retorna apenas um valor, pode omitir a palavra return e as chaves
// ficando assim: nomes.map((nome) => nome.toUpperCase())