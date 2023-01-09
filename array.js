// posições    0   1   2   3
const notas = [6, 7.5, 8, 10]

//acessando itens/elementos/valores do array atavés do seu índice/posição e dividindo pela largura/tamanho do array com a propriedade length
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media)


const listaDeLivros = ["O nome do vento", "O pequeno principe", "Clean code"]
// adicionando um novo livro ao fim da lista
listaDeLivros.push("Fogo e sangue")
console.log(listaDeLivros)
// removendo o último livro da lista
listaDeLivros.pop()
console.log(listaDeLivros)
// esses métodos alteram o array original