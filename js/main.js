import ui from "./ui.js"
import api from "./api.js"

const conteudoPensamento = document.getElementById("pensamento-conteudo");
const autoriaPensamento = document.getElementById("pensamento-autoria");

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();
})

const formPensamento = document.getElementById("pensamento-form");
formPensamento.addEventListener("submit", manipularSubmissaoFormulario)

const formCancelar = document.getElementById("botao-cancelar");

formCancelar.addEventListener("click", (evento) => {
    evento.preventDefault();
    ui.limparFormulario();
});

async function manipularSubmissaoFormulario(evento) {
    evento.preventDefault()

    const conteudo = conteudoPensamento.value;
    const autoria = autoriaPensamento.value;

    try {
        await api.salvarPensamento({conteudo, autoria});
        await ui.renderizarPensamentos();
        ui.limparFormulario();
    } catch {
        alert("Erro ao salvar Pensamento!");
    }
}