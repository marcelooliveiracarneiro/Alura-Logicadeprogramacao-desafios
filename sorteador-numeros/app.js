
iniciar();

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);


    if (de > ate) {
        alert('"Do Número" deve ser menor ou igual que "Até o número"');
        return;
    }

    if (quantidade > 0) { 
        console.log('(ate - de)',(ate - de),((ate - de) > quantidade));
        if (((ate - de) < quantidade)) {
            alert("Quantidade de números invalida");
            return;
        }
    }
    else {
        alert('quantidade deve ser mais que 0 (zero)');
        return;
    }

    //alert(`quantidade: ${quantidade} \n de: ${de} \n ate: ${ate}`);

    let sorteados = [];
    let numero;
    for (let index = 1; index <= quantidade; index++) {
        numero = obterNumeroAleatorio( de, ate );
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    
    elementNumerosSorteadosText( sorteados );

    elementBotaoLock( 'btn-sortear', true );
    elementBotaoLock( 'btn-reiniciar', false );
}

function reiniciar() {
    iniciar();
}

function iniciar() {
    elementInputClear('quantidade');
    elementInputClear('de');
    elementInputClear('ate');
    elementBotaoLock( 'btn-sortear', false );
    elementBotaoLock( 'btn-reiniciar', true );
    elementNumerosSorteadosText( 'nenhum até agora' );
}

function obterNumeroAleatorio( de, ate ) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}

function elementNumerosSorteadosText( text ) {
    let selectorResultado = document.getElementById('resultado');
    let selectorCollection = selectorResultado.getElementsByTagName('label');
    if (selectorCollection.length > 0) {
        selectorCollection[0].textContent = `Números sorteados: ${text}`;
    }
}

function elementInputClear( id ) {
    let selectorInput = document.getElementById( id );
    if (selectorInput) {
        selectorInput.value = '';
    }
}

function elementBotaoLock( id, lock ) { 
    let selector = document.getElementById( id );
    if (selector) {
        selector.classList.add( ((lock == true) ? 'container__botao-desabilitado' : 'container__botao') );
        selector.classList.remove( ((lock == true) ? 'container__botao' : 'container__botao-desabilitado') );
    }
}