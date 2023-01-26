/*
    Operadores lógicos
    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NÃO   
    
    Lembrar da Tabela Verdade

let variavel = '';

if( 1 === 1 && 2 == 2) {
    
    variavel = true;
    console.log(variavel);

} else {
    variavel = false;
    console.log(variavel);

}
*/

/* 
    Curto circuito  o Javasript para de avaliar expressões quando identifica um valor falso quando necessário 

    FALSY
    false
    0
    '' "" ``
    null / undefined
    NaN

 */

function falaOi() {
    return 'Oi';
};

let vaiExecutar = false;

console.log(vaiExecutar && falaOi());

let corUsuario = 'false';
let corPadrao = corUsuario || 'preto';

console.log(corPadrao);
