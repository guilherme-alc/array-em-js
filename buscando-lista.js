const nomes = ["Giovanni", "Esther", "Caique", "Clara"];

const medias = [7, 6, 9, 8.5];
//                      0       1                    
const alunosENotas = [nomes, medias];

function buscaAlunoENotas (aluno) {

    if (alunosENotas[0].includes(aluno)) { // o método includes verifica se uma array contém um determinado elemento, retornando true ou false
        // usamos "[0]" para acessar a lista de nomes dentro da lista de alunosENotas
        // const nomes = alunosENotas[0]
        // const medias = alunosENotas[1] // variáveis com o mesmo nome das listas acima, porém não entra em conflito pois o escopo é diferente
        const [nomes, medias] = alunosENotas; // usando destructuring para atribuir os nomes da variável respectivamente com as listas dentro do alunosENotas

        const indice = nomes.indexOf(aluno); // o método indexOf retorna o índice do elemento na lista

        const notaDoAluno = medias[indice];

        console.log(`A nota da(o) ${aluno} é ${notaDoAluno}`);

    } else {

        console.log("Aluno não encontrado");
    
    }
    // todos esses argumentos com "aluno" será substituído pelo nome inserido nos parênteses ao chamar a função
}

buscaAlunoENotas("Giovanni");