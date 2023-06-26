
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemLua = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");

    if (body.classList.contains("modo-escuro")) {
        imagemLua.setAttribute("src", "./imagens/moon.png");
    } else{
        imagemLua.setAttribute("src", "./imagens/sun.png");
    }
});