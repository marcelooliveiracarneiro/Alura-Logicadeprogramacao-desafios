let qtdDisponivelPista = 100;
let qtdDisponivelSuperior = 200;
let qtdDisponivelInferior = 200;

atualizaQuantidadeDisponivel();

function comprar() {
    let elementTipoIngresso = document.querySelector('#tipo-ingresso');
    let elementQuantidade = document.querySelector('#qtd');

    let ingressoQuantidade = parseInt(elementQuantidade.value);
    if (isNaN(ingressoQuantidade) || (ingressoQuantidade <= 0)) {
        alert('Quantidade deve ser informada e maior que 0 (zero)');
    }

    console.log(elementTipoIngresso, `Tipo: ${elementTipoIngresso.value}, Quantidade: ${ingressoQuantidade}`);

    let erroQtdIndiponivel = false;

    switch (elementTipoIngresso.value) {
        case 'pista':
            if (ingressoQuantidade > qtdDisponivelPista) {
                erroQtdIndiponivel = true;
                break;
            }
            qtdDisponivelPista -= ingressoQuantidade;
            break;
        case 'superior':
            if (ingressoQuantidade > qtdDisponivelSuperior) {
                erroQtdIndiponivel = true;
                break;
            }
            qtdDisponivelSuperior -= ingressoQuantidade;
            break;
        case 'inferior': 
            if (ingressoQuantidade > qtdDisponivelInferior) {
                erroQtdIndiponivel = true;
                break;
            }
            qtdDisponivelInferior -= ingressoQuantidade;
            break;
        default:
            break;
    }

    elementQuantidade.value = '';
    atualizaQuantidadeDisponivel();

    if (erroQtdIndiponivel == true) {
        alert('Quantidade de ingressos não disponível'); 
    } else {
        alert('Compra realizada com sucesso !!!'); 
    }


}

function atualizaQuantidadeDisponivel() {
    console.log(`disponivel pista: ${qtdDisponivelPista}, superior: ${qtdDisponivelSuperior}, inferior: ${qtdDisponivelInferior}`);

    document.querySelector('#qtd-pista').textContent = qtdDisponivelPista;
    document.querySelector('#qtd-superior').textContent = qtdDisponivelSuperior;
    document.querySelector('#qtd-inferior').textContent = qtdDisponivelInferior;
}
