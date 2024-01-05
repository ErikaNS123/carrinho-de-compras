let totalGeral;
limpar();

function adicionar() {
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade <= 0) {
        alert('É necessário inserir a quantidade');
    } else {
        //recuperar valores nome do produto e valor
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = produto.split('R$')[1];

        //calcular o preço, o subtotal do item
        let preco = quantidade * valorUnitario;
        //adicionar no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
            </section>`;

        //atualizar o valor total
        totalGeral = totalGeral + preco;
        let valorTotal = document.getElementById('valor-total');
        valorTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}