function converter(){
    let cotacao =  prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
    let valorAtual =  prompt('Quantos R$ você tem na carteira?')
    cotacao = Number(cotacao)
    valorAtual = Number(valorAtual)
    txt(cotacao,valorAtual)
}
 
function txt(cotacao,valorAtual){
    let txt = document.querySelector('div#inf')
    let valorConvertido = valorAtual / cotacao
    valorConvertido = valorConvertido.toLocaleString('en' , {style: 'currency', currency: 'USD'})
    valorAtual = valorAtual.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})
    txt.innerHTML = `<p>A conversão de ${valorAtual} na cotação atual é de ${valorConvertido}</p>>`
}