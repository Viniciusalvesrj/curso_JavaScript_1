/*

Declaração de CONST


typeof -> Identifica qual o tipo de dados que estão sendo carregados 

*/

let nome = 'Vinicius Alves';
let idade = 34;
let peso = 110;
let alturaEmCentimetros = 1.89;
let imc = peso / (alturaEmCentimetros * alturaEmCentimetros);

console.log(nome + ' tem ' + idade + ' anos, pesa ' + peso + ', tem ' + alturaEmCentimetros + ' de altura e seu IMC é de ' + Math.ceil(imc));

//template string

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmCentimetros} de altura e seu IMC é de ${Math.ceil(imc)}`);