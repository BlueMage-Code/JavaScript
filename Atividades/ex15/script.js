
function executar(){
    let nasc = (document.querySelector('input#nasc')).value
    let data = (new Date()).getFullYear()
    if( nasc.length == 0 || nasc > data) {
        window.alert('Verificar as Informações')
    }
    else{
        aplicar(nasc,data)
    }
    
}

function aplicar(nasc,data){
    let con = document.querySelector('div#con')
    let fsex = document.querySelectorAll("input[type='radio']")
    let idade = data - nasc
    let genero = ''

    //Masculino
    if(fsex[0].checked){
        genero = 'homem'
         //criança
         if(idade < 10){
            con.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/criancaM.jpg" alt="tutis">`
        }
        //adoslecente
        else if (idade < 18){
            con.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/jovemM.jpg" alt="tutis">`
        }
        //adulto
        else if (idade < 65){
            con.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/adultoM.jpg" alt="tutis">`
        }
        //idoso
        else if (idade < 120){
            con.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/idosoM.jpg" alt="tutis">`
        }
        //Defunto
        else{
            con.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/defunto.jpg" alt="tutis">`
        }
    }
    //Feminino
    else if (fsex[1].checked){
       genero = 'mulher'
        //criança
        if(idade < 10){
            con.innerHTML = `<p>Detectamos uma ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/criancaF.jpg" alt="tutis">`
        }
        //adoslecente
        else if (idade < 18){
            con.innerHTML = `<p>Detectamos uma ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/jovemF.jpg" alt="tutis">`
        }
        //adulto
        else if (idade < 65){
            con.innerHTML = `<p>Detectamos uma ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/adultoF.jpg" alt="tutis">`
        }
        //idoso
        else if (idade < 120){
            con.innerHTML = `<p>Detectamos uma ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/idosoF.jpg" alt="tutis">`
        }
        //Defunto
        else{
            con.innerHTML = `<p>Detectamos uma ${genero} com ${idade} anos.</p><br><img id="pessoaIdade" src="img/defunto.jpg" alt="tutis">`
        
        }
    }
}


    

    




