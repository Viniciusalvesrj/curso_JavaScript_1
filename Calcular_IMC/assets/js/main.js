
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





