//valores primitivos (imutáveis): String, boolean, inteiros, 

// valores referências (mutáveis): array, object, function -> Passados por referência

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);

// console.log(b)

// b.pop();
// console.log(a, b);

// a.push('Vinicius');
// console.log(c);

// console.log(a, b, c);


const a = {
    nome: 'Vinicius',
    sobrenome: 'Alves'
};

// const b = a; // Assim afeta a referência de memória. Qualquer alteração em qualquer um dos dados a outra variável também será afetada
const b = {...a} //realiza a cópia dos dados e não aponta mais para a referência de memória

a.nome = 'Carolini';
console.log(a,b)
