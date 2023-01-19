const nome = prompt('Digite o seu nome completo:');

        document.body.innerHTML += `O seu nome é: ${nome} <br>`;
        document.body.innerHTML += `O seu nome tem ${nome.length} letras <br>`;
        document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br>`;
        document.body.innerHTML += `O primeiro índice da letra u do seu nome é: ${nome.search(/u/)} <br>`;
        document.body.innerHTML += `O último índice da letra "i" do seu nome é: ${nome.indexOf('i', -1)} <br>`;
        document.body.innerHTML += `As últimas 3 letras do seu nome é: ${nome.slice(-3)} <br>`;
        document.body.innerHTML += `As Palavras do seu nome são: ${nome.split(' ')} <br>`;
        document.body.innerHTML += `Seu nome com letras maiúsculas é: ${nome.toUpperCase(nome)} <br>`;
        document.body.innerHTML += `Seu nome com letras minúsculas é: ${nome.toLowerCase(nome)} <br>`;

