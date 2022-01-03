function pow(){
  let num = document.querySelector('input#num').value
  let txt = document.querySelector('select#selftab')
  if(num === ''){
    txt.innerHTML = ``
    alert('Digite o valor que deseja a Tabuada!')
  }
  else{
    for(let i = 1; i <= 10; i++){
      let item = document.createElement('option')
      item.text = `${num} x ${i} = ${num * i}`
      txt.appendChild(item)
    }
  }
}