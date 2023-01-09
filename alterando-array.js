// atualizando uma array
const nomes = ['João', 'Ana', 'Caio' ,'Lara', 'Marjorie', 'Leo']
console.log(nomes)

nomes.splice(1, 2, "Rodrigro", "Renan")
// o primeiro argumento indica qual índice queremos acessar, o segundo é quantos índices removeremos do índice acessado a diante e o terceiro argumento é o que iremos adicionar no lugar ou a partir do índice acessado (isso depende se o item foi removido ou não anteriormente).
// ou seja array.splice(pontoInicial, numeroDeElementosDeletados, itemAdicionado)
console.log(nomes)
// obs esse método altera a array original