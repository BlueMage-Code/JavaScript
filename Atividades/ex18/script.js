let lista = []

function pow(){
  let reset = document.querySelector('input#num')
  let num = Number(reset.value)
  if(num === ''){
    alert('Digite um Valor')
    reset.focus()
  }
  else if(num < 1 || num > 100){
    alert('Digite um valor entre 1 e 100')
    reset.value = ''
    reset.focus()
  }
  else if(lista.indexOf(num) > -1){
    alert('Esse número ja existe na lista') 
    reset.value = ''
    reset.focus()
  }
  else{
    adicionar(reset,num)
  }
}

function adicionar(reset,num){
  let listNum = document.querySelector('select#listNum')
  lista.push(num)
  let item = document.createElement('option')
  item.text = `Valor ${num} foi Adicionado`
  listNum.appendChild(item)
  reset.value = ''
  reset.focus()
  con.innerHTML = ''
}

function powpow(){
  let con = document.querySelector('div#con')
  if(lista.length == 0){
    alert('Adicione numeros primeiro antes de acionar o botão!')
  }
  else{
    maior = lista[0]
    menor = lista[0]
    soma = 0
    for(let i in lista){
      soma += lista[i]
      if(lista[i] > maior){
        maior = lista[i]
      }
      if(lista[i] < menor){
        menor = lista[i]
      }
    }
  }
    con.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    con.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    con.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    con.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    con.innerHTML += `<p>A média dos valores digitados é ${soma / lista.length}</p>`
}