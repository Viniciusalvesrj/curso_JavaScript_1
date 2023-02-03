// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
//  [a, b, c] = letras;

//  console.log(a, b, c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const primeiroNumero = numeros[0];

// console.log(primeiroNumero);

const [primeiroNumero, segundoNumero] = numeros;

//const [um, ,tres, ,cinco, , sete];

console.log(primeiroNumero, segundoNumero);


//... (rest), ... (spread)

const numeros2 =  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numeros2[1][2]);

const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);
