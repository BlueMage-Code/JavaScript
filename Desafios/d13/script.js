function checar(){
    let n1 = document.querySelector("#nota1").value;
    let n2 = document.querySelector("#nota2").value;
    n1 = Number(n1)
    n2 = Number(n2)
    
    situacao(n1,n2)
}

function situacao(n1,n2){
    let media = (n1 + n2) / 2
   
    let resultado = media => {
        if(media < 3){
            return 'Reprovado'
        }
        else if (media > 3 && media < 6){
            return 'Recuperação'
        }
        else{
            return 'Aprovado'
        }
    }
    txt(n1,n2,media,resultado(media))
}

function txt(n1,n2,media,resultado){
    let nome = document.querySelector('#nomeAluno').value;
    let txt = document.querySelector('#txt')
    if(media < 3){
        txt.innerHTML = `<p>Analisando a situação de ${nome}</p>
        <p>Com as notas ${n1} e ${n2}, a <strong> média é ${media}</strong></p>
        <p>Com média abaixo de 3,0, aluno está <strong class="reprovado">${resultado}</strong>.</p>`
    }
    else if (media > 3 && media < 6){
        txt.innerHTML = `<p>Analisando a situação de ${nome}</p>
        <p>Com as notas ${n1} e ${n2}, a <strong> média é ${media}</strong></p>
        <p>Com média entre 3,0 e 6,0, aluno está em <strong class="recuperacao">${resultado}.</strong></p>`
    }
    else{
        txt.innerHTML = `<p>Analisando a situação de ${nome}</p>
        <p>Com as notas ${n1} e ${n2}, a <strong> média é ${media}</strong></p>
        <p>Com média acima de 6,0, aluno está <strong class="aprovado">${resultado}</strong>.</p>`
    }
}
    