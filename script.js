// Seleciona os elementos
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const message = document.getElementById('message');

// Evento ao clicar no botão "Sim"
btnSim.addEventListener('click', () => {
    message.textContent = 'Agora não tem mais volta! E não esquece de levar seu filho também ;)';
    message.classList.remove('hidden');
});

// Evento ao passar o mouse sobre o botão "Não"
btnNao.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');

    // Gera novas posições aleatórias dentro do container
    const maxX = container.offsetWidth - btnNao.offsetWidth;
    const maxY = container.offsetHeight - btnNao.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Define a nova posição do botão
    btnNao.style.position = 'absolute';
    btnNao.style.left = `${randomX}px`;
    btnNao.style.top = `${randomY}px`;
});
