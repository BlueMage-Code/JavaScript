function celsius(){
    let c =  prompt('Digite uma temperatura em °C (Celsius)')
    c = Number(c)
    txt(c)
}
 
function txt(c){
    let txt = document.querySelector('div#inf')
    txt.innerHTML = `<h2>A temperatura de ${c}°C, corresponde a...<h2>
    <p>${Number((c + 273.15).toFixed(2))} °K (Kelvin)</p>
    <p>${Number((c * 1.8 + 32).toFixed(2))}°F (Fahrenheit)</p>`
}