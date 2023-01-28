// const data = new Date();
// const diaSemana = data.getDay();
// let diaSemanaTexto;

// switch(diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
// }

// const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// let mes = meses[data.getMonth()];

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }



// document.querySelector('.titulo').innerHTML = `${diaSemanaTexto}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;

const h1 = document.querySelector('.titulo');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' , })+` `+ data.toLocaleTimeString('pt-BR', { timeStyle: 'short'});