function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);


    // Teste no console -----------------------------------------------------------
    console.log(`quantidade: ${quantidade}, de: ${de}, até: ${ate}`);
    //-----------------------------------------------------------------------------

    if (de > ate) {
        alert("'De' não pode ser maior que 'Até'");
        return;
    }

    if ((ate - de + 1) < quantidade || de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }


    // Exibir os números sorteados no console  ------------------------------------
    console.log(sorteados);
    //-----------------------------------------------------------------------------

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    // Exibir os números sorteados na tela ----------------------------------------
    console.log(`Números sorteados:  ${sorteados}`);
    //-----------------------------------------------------------------------------

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }   
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}