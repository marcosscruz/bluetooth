function redirecionar_conteudo() {
    window.location.href = "/assets/html/content.html";
}

function redirecionar_menu_inicial() {
    window.location.href = "./../../index.html";
}

function ampliarImagem(img) {
    var modal = document.getElementById("modal");
    var imagemAmpliada = document.getElementById("imagem-ampliada");
    modal.style.display = "flex"; // Mostra o modal
    imagemAmpliada.src = img.src; // Define a imagem no modal
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Esconde o modal
}

window.onload = function () {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Garante que o modal esteja escondido ao carregar a página
};