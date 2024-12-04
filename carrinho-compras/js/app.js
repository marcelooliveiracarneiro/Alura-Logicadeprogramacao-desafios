let carrinhoTotal = 0; 
limpar();

function adicionar() {
    // recuperar o produto
    let elementProduto = document.querySelector('#produto');
    let elementoQuantidade = document.querySelector('#quantidade');

    let produtoQuantidade = parseInt(elementoQuantidade.value);

    if ((isNaN(produtoQuantidade)) || (produtoQuantidade <= 0)) {
        alert('Qtde. deve ser informada e maior que 0 (zero)');
        return;
    }

    let produtoText = elementProduto.value;
    let produtoNome = produtoText.split('-')[0];

    // Calcular preço do produto
    let produtoValor = parseFloat(produtoText.split('R$')[1]);
    let produtoTotal = (produtoQuantidade * produtoValor);
    
    console.log(`Produto: ${produtoNome}, Valor: ${produtoValor}, Quantidade: ${produtoQuantidade}, Total: ${produtoTotal}`);
    
    // Adicionar no carrinho
    let carrinho = document.querySelector('#lista-produtos');
    carrinho.innerHTML +=
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${produtoQuantidade}x</span> ${produtoNome} <span class="texto-azul">R$${produtoValor}</span>
    </section>`;

    // Calcular valor total
    carrinhoTotal += produtoTotal;
    
    atualizaTotalCarrinho();

    // Limpando dados
    elementoQuantidade.value = '';

}

function limpar() {
    let elementCarrinho = document.querySelector('#lista-produtos');
    elementCarrinho.innerHTML = '';
    let elementQuantidade = document.querySelector('#quantidade');
    elementQuantidade.value = '';
    carrinhoTotal = 0;
    atualizaTotalCarrinho();
}


function atualizaTotalCarrinho() {
    let elementCarrinhoTotal = document.querySelector('#valor-total');
    elementCarrinhoTotal.textContent = `R$ ${carrinhoTotal}`;
}