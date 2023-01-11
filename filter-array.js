// o método filter retona um novo array com os elementos que passaram no teste lógico implementado através de uma função callback
const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7, 4.5, 8, 7.5]

const aprovados = alunos.filter((_, indice) => { // parâmetro nomeado com "_" pra informar ao js que não quero utiliza-lo, podendo ser possível usar o parâmetro após ele
    return medias[indice] >= 6; // todos os indices da lista de medias que tiverem o valor maior ou igual a 6 retornarão true na função callback e serão adicionados na array de aprovados, os que retornarem false serão descartados
})

console.log(aprovados)