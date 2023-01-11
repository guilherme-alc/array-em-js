// a atribuição por valor ocorre em dados do tipo primitivo no Javascript. Ex.:
let num1 = 10;
let num2 = num1;

num1 += 5;
num2 += 1;

console.log(`Num1 é ${num1} e Num2 agora é ${num2}`)
// o Js cria uma copia pra nova variável com seu própio lugar na memória, portanto ao modificar uma das variáves a outra não é alterada

// em dados mais complexos como as array em Js, ocorre a atribuição por referência

const listaFilmesTerror = ["Midsommar", "Hereditário", "Suspiria", "Scream"]
const listaFilmesFantasia = ["Harry Potter", "Senhor Dos Aneis", "Transformers", "Avatar"]

const listaGeral = listaFilmesTerror.concat(listaFilmesFantasia)

const listaAtualizada = listaGeral
listaAtualizada.push("Piratas do Caribe")
console.log(listaGeral)

// agora tanto a listaGeral quanto a listaAtualizada estão com o filmes Piratas do Caribe incluso, pois por questões de otimização e performance o Js usa o mesmo lugar na memória pras duas variáveis e passando a referência do local da listaGeral para ListaAtualizada e não o valor em si