let txt = document.querySelector('p#txthora')
let img = document.querySelector('div#imagemHora')
let hora = (new Date()).getHours()
hora = 22

if(hora < 12){
    txt.innerHTML = `Bom dia, agora são ${hora} da Manha`;
    img.innerHTML = `<img id="imgHora" src="img/manha.jpg" alt="Imagem Hora"></img>`;
    document.body.style.backgroundColor = '#1D5C6E'
}
else if(hora < 19){
    txt.innerHTML = `Boa Tarde, agora são ${hora} da Tarde`;
    img.innerHTML = `<img id="imgHora" src="img/tarde.jpg" alt="Imagem Hora"></img>`;
    document.body.style.backgroundColor = '#070543'
}
else{
    txt.innerHTML = `Boa Noite, agora são ${hora} da Noite`;
    img.innerHTML = `<img id="imgHora" src="img/noite.jpg" alt="Imagem Hora"></img>`;
    document.body.style.backgroundColor = 'black'
}

