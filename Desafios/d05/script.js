function metros(){
    let m =  prompt('Qual valor em metro deseja converter?(m)')
    m = Number(m)
    txt(m)
}
 
function txt(m){
    let txt = document.querySelector('div#inf')
    txt.innerHTML = `<h2>A distância de ${m} metros, corresponde a...<h2>
    <p>${Number((m * 0.001).toFixed(3))} quilômetros (Km)</p>
    <p>${Number((m * 0.01).toFixed(3))} hectômetros (Hm)</p>
    <p>${Number((m * 0.1).toFixed(3))} decâmetros (Dam)</p> 
    <p>${Number((m * 10).toFixed(3))} decímetros (dm)</p>
    <p>${Number((m * 100).toFixed(3))} centímetros (cm)</p> 
    <p>${Number((m * 1000).toFixed(3))} milímetros (mm)</p>`
}