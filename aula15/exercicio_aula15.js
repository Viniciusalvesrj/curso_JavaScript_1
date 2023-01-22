//Minha resposta
let numero = prompt('Digite um númmero: ')
let numeroTeste = Number(numero);


document.getElementById('numerto-titulo').innerHTML = `${numeroTeste}`;

document.getElementById('raiz').innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numeroTeste)}</p>`;

document.getElementById('inteiro').innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numeroTeste)}</p>` ;

document.getElementById('notNan').innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numeroTeste)}</p>` ;

document.getElementById('arredondandoParaBaixo').innerHTML += `<p>Arredondando para baixo ${Math.floor(numeroTeste)} </p>` ;

document.getElementById('arredondandoParaCima').innerHTML += `<p>Arredondando para cima ${Math.ceil(numeroTeste)} </p>` ;

document.getElementById('duasCasasDecimais').innerHTML += `<p>Com duas casas decimais ${numeroTeste.toFixed(2)} </p>` ;



//resposta do curso
/*
const numeroAula = Number(prompt('Digite um número: '));
const numertoTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numertoTitulo.innerHTML = numeroAula;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;
*/
