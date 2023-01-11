// removento elementos duplicados de um array com a classe Set (conjunto)

const nomesRepetidos = ["Joao", "Joao", "Ana", "Pedro", "Samanta", "Pedro", "Douglas"];

const nomesSet = new Set (nomesRepetidos);
console.log(nomesSet);

const nomesLista = [...nomesSet]; // transformando o Set em array
console.log(nomesLista);

console.log([...new Set (nomesRepetidos)]); // <-- forma simplificada

console.log(nomesSet.has("Jonny")); // retorna false pois Jonny não é um elemento do Set
console.log(nomesSet.has("Joao")); // retorna true
nomesSet.add("Gustavo");
nomesSet.add("Fabricio");
nomesSet.delete("Fabricio");
console.log(nomesSet.size); // quantidade de elementos únicos

// outro exemplo para criar um conjunto

const numeros = new Set([1, 3, 5, 7, 9]); 
console.log(numeros);
const numerosAdicionais = [1, 2, 3, 4, 5, 6, 7, 8]; // array com números já existentes no conjunto
const todosNumeros = new Set ([...numerosAdicionais, ...numeros]); // transformando o conjunto numeros em uma array e espalhando ele e a array de numerosAdicionais em todosNumeros
console.log(todosNumeros); // além dos números duplicados serem removidos, eles também foram organizados