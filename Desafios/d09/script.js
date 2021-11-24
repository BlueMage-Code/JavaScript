function reajuste(){
    let nome =  prompt('Qual o nome do funcionario?')
    let salario =  prompt(`Qual é o salario de ${nome}?`)
    let reajuste = prompt(`O salario de ${nome} vai ser reajusta em qual porcentagem?`)
    salario = Number(salario)
    reajuste = Number(reajuste)
    
    txt(nome, salario, reajuste)
}
 
function txt(nome, salario, reajuste){
    let txt = document.querySelector('div#inf')
    txt.innerHTML = `<h1>${nome} recebeu um aumento salarial!</h1>
    <p>O salario atual era ${salario.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}.</p>
    <p>Com um aumento de ${reajuste}%, o salário vai aumentar ${(salario * (reajuste * 0.01)).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} no próximo mês. </p>
    <p>E a partir dai, ${nome} vai passar a ganhar ${(salario + (salario * (reajuste * 0.01))).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}</p>`
}