const numeros = [100, 200, 300, 400, 500, 600]

// o for consiste em 3 expressões opcionais separadas por ponto e virgula
// Primeira expressão: é executada apenas uma única vez -> Inicialização
// Segunda expressão: condição de execução -> Condição. se condição = true, declarção executada
// Terceira expressão: é executada sempre ao final do bloco -> Expressão final/atualização da expressão inicial

// let indice = 0 a variável pode ser declarada fora do for e ele ficaria assim for (; indice < 6; indice = indice + 1)

for (let indice = 0; indice <= 5; indice = indice + 1) {
    console.log(numeros[indice]) //-> Declaração
}