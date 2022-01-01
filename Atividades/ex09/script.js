function pow(){
    let pais = (document.querySelector('input#txt')).value
    pais = pais.toUpperCase()
    let res = document.querySelector('div#res')
    res.innerHTML = `<p>Nascido em ${pais}<p>`
    if(pais != 'BRASIL'){
        res.innerHTML +=`Voce é Estrangeiro!`
    }
    else{
        res.innerHTML += `Voce é Brasileiro!`
    }
}