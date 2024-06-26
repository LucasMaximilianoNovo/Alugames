let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);

    let imagem = jogoClicado.querySelector('.dashboard__item__img');

    let botao = jogoClicado.querySelector('.dashboard__item__button');

    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');

            botao.classList.remove('dashboard__item__button--return');

            botao.textContent = 'Alugar';

            jogosAlugados--;
        }
       
    } else {
        imagem.classList.add('dashboard__item__img--rented');

        botao.classList.add('dashboard__item__button--return');

        botao.textContent = 'Devolver';

        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});