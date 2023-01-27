
function teste() {

    const form = document.querySelector('.form');

    function recebeEventoForm(evento) {

        evento.preventDefault();

        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;

        let resultado = (peso / (altura ** 2));

        resultado = resultado.toFixed(2);

        if(isNaN(peso)) {

            document.querySelector('.resultado2').innerHTML = 'Peso inválido';
            document.querySelector('.resultado').innerHTML = '';

        } else if( isNaN(altura)) {

            document.querySelector('.resultado2').innerHTML = 'Altura inválida';
            document.querySelector('.resultado').innerHTML = '';

        } else {

            document.querySelector('.resultado2').innerHTML = '';
            if(resultado <= 18.5 ) {
                document.querySelector('.resultado').innerHTML = `O seu IMC é igual a ${resultado} e você está abaixo do peso`;  
            } else if (resultado > 18.5 && resultado <= 24.9) {
                document.querySelector('.resultado').innerHTML = `O seu IMC é igual a ${resultado} e você está com Peso Normal`;  
            } else if (resultado > 24.9 && resultado <= 29.9) {
                document.querySelector('.resultado').innerHTML = `O seu IMC é igual a ${resultado} e você está com Sobrepeso`;  
            } else if (resultado > 29.9 && resultado <= 34.9) {
                document.querySelector('.resultado').innerHTML = `O seu IMC é igual a ${resultado} e você está com Obesidade grau 1`;  
            } else if (resultado > 34.9 && resultado <= 39.9) {
                document.querySelector('.resultado').innerHTML = `O seu IMC é igual a ${resultado} e você está com Obesidade grau 2`;  
            } else if (resultado > 40) {
                document.querySelector('.resultado').innerHTML = `O seu IMC é igual a ${resultado} e você está com Obesidade grau 3`;  
            }
        
        }
        //document.querySelector('.resultado').innerHTML =    
    }

    form.addEventListener('submit', recebeEventoForm);
}


/* Resposta do curso */

    //Capturar o evento de submit do formulário
    // const form = document.querySelector('#formulario');
    // form.addEventListener('submit', function(e) {
    //     e.preventDefault();
        
    //     const inputPeso = e.target.querySelector('#peso');
    //     const inputAltura = e.target.querySelector('#altura');

    //     const peso = Number(inputPeso.value);
    //     const altura = Number(inputAltura.value);

    //     if (!peso) {
    //         setResultado('Peso inválido', false);
    //         return;
    //     } 

    //     if(!altura) {
    //         setResultado('Altura inválida', false);
    //         return;
    //     }

    //     const imc = getImc(peso, altura);
    //     const nivelImc = getNivelImc(imc);

    //     const msg = `seu IMC é ${imc} (${nivelImc}).`;
        
    //     setResultado(msg, true);
    // });

    // function getNivelImc(imc) {
    //     const nivel = [
    //         'Abaixo do peso',
    //         'Peso normal',
    //         'Sobrepeso',
    //         'Obesidade grau 1',
    //         'Obesidade grau 2',
    //         'Obseidade grau 3'
    //     ];

    //     if(imc >= 39.9) return nivel[5];
    //     if( imc >= 34.9) return nivel[4];
    //     if( imc >= 29.9) return nivel[3];
    //     if( imc >= 24.9) return nivel[2];
    //     if( imc >= 18.5) return nivel[1];
    //     if (imc < 18.5) return nivel[0];
        
        
    // }

    // function getImc(peso, altura) {
    //     const imc = peso / altura ** 2;
    //     return imc.toFixed(2);
    // }

    // function criaP() {
    //     const p = document.createElement('p');
    //     return p;
    // }

    // function setResultado(msg, isValid) {
    //     const resultado = document.querySelector('#resultado');
    //     resultado.innerHTML = '';

        
    //     const p = criaP();

    //     if (isValid) {
    //         p.classList.add('paragrafo-resultado');
    //     } else {

    //         p.classList.add('bad');
    //     }
    //     p.innerHTML = msg;
    //     resultado.appendChild(p);
    // }







