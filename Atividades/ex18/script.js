let lista = []
let listNum = document.querySelector('select#listNum')
function pow(){
  let num = document.querySelector('input#num').value
  if(num === ''){
    alert('Digite um Valor!')
  }
  else if(  num < 1 || num > 100){
    alert('Digite um Valor entre 1 e 100')  
  }
  else if(lista.indexOf(num) > -1){
    alert('Esse número ja existe na lista') 
  }
  else{
      adicionar(num)
  } 
    
}

function adicionar(num){  
    lista.push(num)
    let item = document.createElement('option')
    item.text = `Valor ${num} foi Adicionado`
    listNum.appendChild(item)
   

}

function powpow(){
    lista.sort()
    if(lista.length == 0){
        alert('Adicione numeros primeiro antes de acionar o botão!')
    }
    else{
        let con = document.querySelector('div#con')
        alert(lista)
        let soma = 0
        for(let i = 0; i < lista.length; i++){
            // pesquisar o porque da array nao deixar ultiliza-la sem transforma-la
            let y = Number(lista[i])
            soma = soma + y
        }
        con.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        con.innerHTML += `<p>O maior valor informado foi ${lista[(lista.length)-1]}.</p>`
        con.innerHTML += `<p>O menor valor informado foi ${lista[0]}.</p>`
        con.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        con.innerHTML += `<p>A média dos valores digitados é ${soma / lista.length}</p>`
    }
}
    

