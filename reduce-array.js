// somando notas com o método reduce
const sala1 = [10, 6.5, 8, 7.5]
const sala2 = [9, 6, 6]
const sala3 = [8.5, 9.5]

function calculaMedia(notasDasala) {
    const somaDasNotas = notasDasala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0) // segundo parâmetro define o valor inicial do acumulador

    const media = somaDasNotas / notasDasala.length
    return media
}

console.log(`A média da primeira sala é igual a ${calculaMedia(sala1)}`)
console.log(`A média da segunda sala é igual a ${calculaMedia(sala2)}`)
console.log(`A média da terceira sala é igual a ${calculaMedia(sala3)}`)