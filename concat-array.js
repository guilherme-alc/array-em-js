const apelidosNome = ["Gui", "Guima", "Guicam"]
const apelidosNick = ["Tchubs", "Biras", "Birao"]

const todosNomes = apelidosNome.concat(apelidosNick)
// Não altera as listas originais e retorna uma nova
console.log(todosNomes)

// obs concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.

// outros exemplos de concat - adicionando itens:
const arrayNumber = [1, 2, 3]
const arrayString = arrayNumber.concat("quatro", "cinco", "seis")

console.log(arrayNumber)
console.log(arrayString)


const funcionarios = ["Guilherme", "Laura", "Simone"]
const info = funcionarios.concat(["Desenvolvedor", "Design", "R.H"], [21, 19, 35])
console.log(info)
