let agora = new Date()
let hora = agora.getHours()

if(hora < 5 ){
    console.log('Boa Madrugada')
}
else if(hora < 12){
    console.log('Bom Dia')
}
else if(hora < 19){
    console.log('Boa Tarde')
}
else{
    console.log('Boa Noite')
}
    
    
    