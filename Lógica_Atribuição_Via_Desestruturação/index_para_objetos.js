const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Alves',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

//const nome = pessoa.nome; Atribuição normal

const { nome, ...resto } = pessoa; //atribuição via desestruturação 

// const {endereco: {rua: r = 12345, numero, ...resto }} = pessoa; // para usar via resto, basta utilizar '...'


console.log(nome, resto);
