// const data = new Date('2023-01-26 20:15:59.100'); //YYYY, MM, DD, H, min, seg, mil
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milisegundos', data.getMilliseconds());
// console.log('Dia semana', data.getDay());

// console.log(Date.now());

// console.log(data.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
   const dia = zeroAEsquerda (data.getDate());
   const mes = zeroAEsquerda (data.getMonth() + 1);
   const ano = zeroAEsquerda (data.getFullYear());
   const hora = zeroAEsquerda (data.getHours());
   const min = zeroAEsquerda (data.getMinutes());
   const sec = zeroAEsquerda (data.getSeconds());

   return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}` ;
}

const data = new Date();

const dataBrasil = formataData(data);

console.log(dataBrasil);