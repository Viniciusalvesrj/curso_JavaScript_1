//Minha resposta
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

// for(i = 0; i < elementos.length; i++) {
   
//     const { tag, texto} = elementos[i];

//     console.log(tag, texto)

//     const tagHtml = document.createElement(tag);
//     const conteudoHtml = document.createTextNode(texto);

//     tagHtml.appendChild(conteudoHtml);

//     const inserindoConteudo = document.querySelector('.container');

//     inserindoConteudo.appendChild(tagHtml);
// }

//solução do curso
    const conatiner = document.querySelector('.container');
    const div = document.createElement('div');

    for(i = 0; i < elementos.length; i++) {
        
        let { tag, texto } = elementos[i];

        let tagCriada = document.createElement(tag);
        // tagCriada.innerText = texto;

        let textoCriado = document.createTextNode(texto);
        tagCriada.appendChild(textoCriado);

        div.appendChild(tagCriada);

    }

    conatiner.appendChild(div);

