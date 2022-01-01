function pow(){
    let idade = Number((document.querySelector('input#idade')).value)
    let res = document.querySelector('div#res')

    if(idade >= 16){
        if(idade < 18 || idade > 65){
            res.innerHTML = `<p>Voto Opcional</p>`
        }
        else{
            res.innerHTML = `<p>Voto Obrigatorio</p>`
        }
    }
    else{
        res.innerHTML = `<p>Não pode Votar</p>`
    }
}
    
    
    