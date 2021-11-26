function reajuste(){
    let ladoA = prompt('Qual é o valor de A?')
    let ladoB = prompt('Qual é o valor de B?')
    let ladoC = prompt('Qual é o valor de C?')
    conta(ladoA,ladoB,ladoC)   
}

function conta(ladoA,ladoB,ladoC){
    let resultado = (Math.pow(ladoB,2)) - 4 * ladoA * ladoC
    
    //equacao e equacao2 são para colocar parenteses nos numeros negativos na apresentação da conta e ajusta sua formatação para um texto legivel.
    let equacao = (ladoA,ladoB,ladoC) => {
        if( ladoB < 0 || ladoC < 0){
            
            if(ladoB < 0){
                ladoB = ` - ${ladoB - (ladoB * 2)}`
            }
            else{
                ladoB = ` + ${ladoB}`
            }

            if(ladoC < 0){
                ladoC = ` - ${ladoC - (ladoC * 2)}`
            }
            else{
                ladoC = ` + ${ladoC}`
            }
           
            return `${ladoA}x²${ladoB}x${ladoC} `
            }

        else{
            return `${ladoA}x² + ${ladoB}x + ${ladoC}`
        }   
    } 
    
    let equacao2 = (ladoA,ladoB,ladoC) => {
        if(ladoA < 0 || ladoB < 0 || ladoC < 0){
            if(ladoA < 0){
                ladoA = `(${ladoA})`
            }
            if(ladoB < 0){
                ladoB = `(${ladoB})`
            }
            if(ladoC < 0){
                ladoC = `(${ladoC})`
            }
        }
        return `${ladoB}² - 4 . ${ladoA} . ${ladoC}`
    } 

    txt(resultado,equacao2(ladoA,ladoB,ladoC),equacao(ladoA,ladoB,ladoC))
}

function txt(resultado,equacao2,equacao){
    let txt = document.querySelector('div#inf')
    txt.innerHTML = `<h1>Resolvendo Bhaskara</h1>
    <p>A equação atual é ${equacao}</p>
    <p>O cálculo realizado será 🛆 = ${equacao2} </p>
    <p>O calor calculado foi <strong>🛆 = ${resultado}<strong></p>`
}