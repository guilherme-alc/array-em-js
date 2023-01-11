// Se quisermos criar uma clonar uma array e adicionar um novo elemento na copia podemos usar o seguinte método:

const notasOriginais = [1, 3, 4, 6]
const novasNotas = notasOriginais
novasNotas.push(7, 10)

console.log(novasNotas)
// porém ao usar esse método estamos atribuindo as notasOriginais e novasNotas ao mesmo lugar na memória e o Js entende que são a mesma array, sendo assim as notasOriginais também serão modificadas
console.log(notasOriginais)

// Para copiar uma array e inserir novos elementos sem alterar a array original podemos usar o spread operator (operador de espalhamento) "..."
const despesaSemana = [150, 36, 14, 220]
const despesaMes = [...despesaSemana, 45, 10, 350, 250, 700] //espalhamento dos elementos da array despesaSemana dentro da nova array despesaMes
// despesaMes.push(45, 10, 350, 250, 700) podemos também usar o método push para adicionar novos elementos ao fim da lista

const registro = `
lista das despesas da primeira semana de janeiro:
${despesaSemana}
lista com as despesas do mês inteiro:
${despesaMes}
total:
`

console.log(registro)