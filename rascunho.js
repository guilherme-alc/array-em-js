// relembrando array
const listaDeComidas = ["banana", "pão", "ovos", "frango", "leite", "requeijão"]

const adicionandoProdutos = listaDeComidas.push("granola", "arroz", "macarrão")

const produtosLimpeza = ["detergente", "cloro", "pasta de dente", "sabonete liquido", "panos de prato"]

produtosLimpeza.pop()
produtosLimpeza.push("sabão em pó")

const listaGeral = listaDeComidas.concat(produtosLimpeza)

const comidasDaLista = listaGeral.slice(0, 9)

const limpezaDaLista = listaGeral.slice(9)

const listaDePreço = [4.40, 6.30, 10, 16.99, 9, 5, 8, 12, 9, 3.5, 7.7, 4.50, 9.99, 11]

const listaDeCompras = [listaGeral, listaDePreço]

// console.log(listaDeCompras[2][0])


for (i = 0; i < listaDeCompras.length; i++) {

    const listaDaVez = listaDeCompras[i]
    console.log(listaDaVez)

    for (j = 0; j < listaDaVez.length; j++) {

    }
}
