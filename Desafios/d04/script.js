function popUp(){
    let nomeProduto = prompt('Que produto você está comprando?')
    let valorProduto = prompt("Quanto custa o produto '" + nomeProduto + "' que você está comprando?")
    let valorRecebido = prompt("Qual o foi o valor que você deu para pagar o produto '" + nomeProduto + "'.")
    valorProduto = Number(valorProduto)
    valorRecebido = Number(valorRecebido)
    valorTroco = valorRecebido - valorProduto

   valorProduto = valorProduto.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})
   valorRecebido = valorRecebido.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})
   valorTroco = valorTroco.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})

    alert(`Você comprou o produto ${nomeProduto} que custou ${valorProduto}.
Deu ${valorRecebido} em dinheiro e vai receber ${valorTroco} de troco.
Volte Sempre!`)
}
