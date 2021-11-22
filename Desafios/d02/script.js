function popUp() {
    let nome = window.prompt('Qual é seu nome?') 
    //função feita para que seja digitado apenas numeros em idade.
    function promptInt(mensagem, tenteNovamente) {
        var idade = mensagem;
        while (true) {
            var ret = parseInt(prompt(idade));
            if (!isNaN(ret)) return ret;
            idade = tenteNovamente;
        }
    }
    var idadeSaida = promptInt('Olá, ' + nome + '! Quantos anos voce tem? '  , 'Por favor ' + nome + ' digite sua idade.');
    alert(`Acabei de conhecer essa pessoa chamada ${nome}, que tem ${idadeSaida} anos de idade!`);
}