//alert('Olá');

const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br>`;
document.body.innerHTML += `Qual o primeiro índice da letra "i" no seu nome? ${nome.indexOf("i")}<br>`;


/*Testes do github*/