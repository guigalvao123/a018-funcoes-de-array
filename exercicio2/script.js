// # Exercício 2
// Crie um array de números que contenha 8 números.

const arrayNumeros = [1,2,3,4,5,6,7,8]
console.log("Array Original",arrayNumeros)

// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;

const triplos= arrayNumeros.map((numeros)=>{
    return numeros * 3
})
console.log("Array Original multiplicado por 3:",triplos)

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const metade = arrayNumeros.map((numeros)=>numeros/2)
console.log("Array Original dividido por 2:",metade)
