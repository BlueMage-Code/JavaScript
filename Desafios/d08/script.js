function desconto(){
    let produto =  prompt('Qual o produto que você está comprando?')
    let produtoValor =  prompt(`Qual o preço de ${produto}?`)
    produtoValor = Number(produtoValor)
    
    txt(produto,produtoValor)
}
 
function txt(produto,produtoValor){
    let txt = document.querySelector('div#inf')
    txt.innerHTML = `<h1>Calculando desconto de 10% para ${produto}</h1>
    <p>O preço original era de ${produtoValor.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}.</p>
    <p>Você acaba de ganhar ${(produtoValor * 0.1).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} de desconto (10% OFF). </p>
    <p>No fim, você vai pagar ${(produtoValor -(produtoValor * 0.1)).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'}) } no produto ${produto}</p>`
}