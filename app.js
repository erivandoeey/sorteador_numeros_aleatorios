// Função principal que realiza o sorteio de números
function sortear() {    // Obtém a quantidade de números a serem sorteados e os limites do intervalo
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = []; // Lista para armazenar os números sorteados
    let numero; // Variável temporária para armazenar o número sorteado

    
    for (let i = 0; i < quantidade; i++) { // Loop que gera a quantidade desejada de números aleatórios
        numero = obterNumeroAleatorio(de, ate); // Gera um número aleatório dentro do intervalo

        while (sorteados.includes(numero)) { // Garante que o número sorteado não seja repetido
            numero = obterNumeroAleatorio(de, ate); // Gera outro número se já existir na lista
        }

        sorteados.push(numero); // Adiciona o número único à lista de sorteados
    }
    
    
    let resultado = document.getElementById('resultado'); // Exibe os números sorteados na página
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    
    alterarStatusBotao();  // Altera o status do botão de reinício
}

// Função auxiliar para gerar um número aleatório dentro de um intervalo definido
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alterar a classe do botão de reiniciar, ativando ou desativando-o
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função para reiniciar os campos e resetar o sorteio
function reiniciar() {
    // Limpa os campos de entrada
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // Reseta a exibição do resultado
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    // Desativa o botão de reinício
    alterarStatusBotao();
}
