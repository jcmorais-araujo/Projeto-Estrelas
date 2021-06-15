/* Identificação dos personagens */

/* Personagem 1 */
const nome = document.getElementById('Personagem1')
const image = document.getElementById('img1')

/* Personagem 2 */
const nome2 = document.getElementById('Personagem2')
const image2 = document.getElementById('img2')

/* Personagem 3 */
const nome3 = document.getElementById('Personagem3')
const image3 = document.getElementById('img3')

/* Personagem 4 */
const nome4 = document.getElementById('Personagem4')
const image4 = document.getElementById('img4')

/* Identificação da quantidade de personagens */
const PersonagensAleatorios = 671;

/* Essa parte é relacionada com a identificação e geração de personagens através da API de Rick e Morty */

/* Geração do Personagem 1 */
GerarPersonagens = () => {
    return Math.floor(Math.random() * PersonagensAleatorios);
}
Personagem1 = () => {
    const id = GerarPersonagens();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image.src = data.image;
        image.alt = 'Imagem do Personagem ' + data.name;
        nome.innerHTML = data.name;
    })
}

/* Geração do Personagem 2 */

Personagem2 = () => {
    const id = GerarPersonagens();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        image2.alt = 'Imagem do Personagem' + data.name;
        nome2.innerHTML = data.name;

    })
}

/* Geração do Personagem 3 */

Personagem3 = () => {
    const id = GerarPersonagens();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        image3.alt = 'Imagem do Personagem' + data.name;
        nome3.innerHTML = data.name;

    })
}

/* Geração do Personagem 4 */
Personagem4 = () => {
    const id = GerarPersonagens();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        image4.alt = 'Imagem do Personagem' + data.name;
        nome4.innerHTML = data.name;

    })
}

/* Apresentação do projeto */
window.onload = () => {
    Personagem1()
    Personagem2()
    Personagem3()
    Personagem4()

}