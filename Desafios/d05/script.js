function metros(){
    let m =  prompt('Qual valor em metro deseja converter?(m)')
    m = Number(m)
    txt(m)
}
 
function txt(m){
    let txt = document.querySelector('div#inf')
    txt.innerHTML = `<h2>A distância de ${m} metros, corresponde a...<h2> <p>${(m * 0.001).toPrecision(3)} quilômetros (Km)</p> <p>${(m * 0.01).toPrecision(3)} hectômetros (Hm)</p> <p>${(m * 0.1).toPrecision(3)} decâmetros (Dam)</p> <p>${(m * 10).toPrecision(3)} decímetros (dm)</p> <p>${(m * 10).toPrecision(3)} centímetros (cm)</p> <p>${(m * 1000).toPrecision(3)} milímetros (mm)</p>`
}