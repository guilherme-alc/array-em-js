const alunos = ["Guilherme", "Gabriel", "Larissa", "Vitória", "Rafael", "Ana", "Gabriela", "Jéssica", "Verônica", "Alice", "Erik", "Johnny", "Miguel", "Douglas", "Maria", "Juliana"]

// esse método não altera o array original - em vez disso ele cria um novo array - portando para imprimir o resultado devemos atribuir ele a uma variável
const sala1 = alunos.slice(0, alunos.length / 2)
console.log(sala1)

const sala2 = alunos.slice(alunos.length / 2) // <- quando não informamos o segundo parâmetro o metodo pega do primeiro parâmetro até o fim da lista
console.log(sala2)