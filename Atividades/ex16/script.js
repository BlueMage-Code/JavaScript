function pow(){
    let ini = document.querySelector('input#ini').value
    let fim = document.querySelector('input#fim').value
    let inc = document.querySelector('input#inc').value
    let txt = document.querySelector('div#con')
    console.log(ini, fim, inc)

    if(ini === '' || fim === '' || inc === ''){
        txt.innerHTML = `<p>Preparando a contagem...</p>`
        window.alert("Preencha os campos.")
    }
    else if(ini === fim){
        txt.innerHTML = `<p>Preparando a contagem...</p>`
        window.alert("Inicio e fim devem ser diferentes.")
    } 
    else if(inc == 0){
        txt.innerHTML = `<p>Preparando a contagem...</p>`
        window.alert("Incremento deve ser maior que 0.")
    } 
    else{
        executar()
    }
}
function executar(){
    let ini = Number(document.querySelector('input#ini').value)
    let fim = Number(document.querySelector('input#fim').value)
    let inc = Number(document.querySelector('input#inc').value)
    let txt = document.querySelector('div#con')
    let cadeia = ''
     
    if(ini < fim){
       while(ini < fim ){
         cadeia += `${ini} ️➡️ ` 
         ini += inc
         console.log(cadeia)
       }
     }
     else if(fim < ini){
       while(fim < ini){
       cadeia += `${fim} ️➡️ ` 
       fim += inc
       console.log(cadeia)
       }
     }
      txt.innerHTML = `<p> ${cadeia} 👌</p<`
    }