function bissexto (){
    let ano = prompt('Qual é o ano que você quer verificar?')
    verificacao(ano)   
}

function verificacao(ano){
    let se = ano => {
        if(ano%4 === 0){
            if(ano%400 === 0){
                return '<strong class="true">É BISSEXTO</strong> ✔️'
            }
            else if(ano%100 === 0){
                return '<strong class="false">NÃO É BISSEXTO</strong> ❌'
            }
            else{
                return '<strong class="true">É BISSEXTO</strong> ✔️'
            }
        }
        else{
            return '<strong class="false">NÃO É BISSEXTO</strong> ❌'
        }
    }
    
    txt(ano,se(ano))
}

function txt(ano,se){
    let txt = document.querySelector('div#inf')
    txt.innerHTML = `<h1>Anolisando o ano de ${ano}</h1>
    <p>O Ano de ${ano} ${se} </p>
    `
}