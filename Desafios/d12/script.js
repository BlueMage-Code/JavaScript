function preco (){
    let precoAntes = prompt('Qual era o preço anterior do produto?')
    let precoDepois = prompt('Qual é o preço atual do produto?')
    verificacao(precoAntes,precoDepois)   
}

function verificacao(precoAntes,precoDepois){
    let porcentagem = (precoAntes,precoDepois) => {
        if(precoAntes > precoDepois){
            return -(precoDepois - precoAntes) * (100 / precoDepois)
        }
        else{
            return -(precoAntes - precoDepois) * (100 / precoAntes)
        }
    }    
    txt(precoAntes,precoDepois,porcentagem(precoAntes,precoDepois))
}

function txt(precoAntes,precoDepois,porcentagem){
    let txt = document.querySelector('div#inf')
    if(precoAntes < precoDepois){
        txt.innerHTML = `<h1>Analisando os valores informados</h1>
        <p>O produto custava ${(Number(precoAntes)).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} e agora custa ${(Number(precoDepois)).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}</p>
        <p>Hoje o produto está mais caro.</p>
        <p>O preço subiu ${(precoDepois - precoAntes).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>
        <p>Uma variação de ${Number(porcentagem.toFixed(2))}% para cima.`
    }
    else{
        txt.innerHTML = `<h1>Analisando os valores informados</h1>
        <p>O produto custava ${(Number(precoAntes)).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} e agora custa ${(Number(precoDepois)).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}</p>
        <p>Hoje o produto está mais barato.</p>
        <p>O preço caiu ${(precoAntes - precoDepois).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>
        <p>Uma variação de ${Number(porcentagem.toFixed(2))}% para baixo.`
    }
}