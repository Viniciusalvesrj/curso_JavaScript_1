// const pessoa1 = {
//     nome: 'Vinicius',
//     sobrenome: 'Alves',
//     idade: 34
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }

//     // return { nome, sobrenome, idade } //Utilizando assim funcionará e o código ficará menos verboso
// }

// const pessoa1 = criaPessoa('Vinicius', 'Alves', 34);
// const pessoa2 = criaPessoa('Jaqueline', 'Eduardo', 34);
// const pessoa3 = criaPessoa('Carolini', 'Milagre', 5);

// console.log(pessoa1, pessoa2, pessoa3)


const pessoa1 = {
    nome: 'Vinicius',
    sobrenome: 'Alves',
    idade: 34,

    fala() {
        console.log(`Olá! Meu nome é ${this.nome} e a minha idade é: ${this.idade}`);
    },

    incrementaIdade() {
        ++this.idade;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();