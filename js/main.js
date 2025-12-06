import ui from "./ui.js"
import api from "./api.js"

const idPensamento = document.getElementById("pensamento-id")
const conteudoPensamento = document.getElementById("pensamento-conteudo");
const autoriaPensamento = document.getElementById("pensamento-autoria");

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();

    const formPensamento = document.getElementById("pensamento-form");
    formPensamento.addEventListener("submit", manipularSubmissaoFormulario)

    const formCancelar = document.getElementById("botao-cancelar");
    formCancelar.addEventListener("click", (evento) => {
        evento.preventDefault();
        ui.limparFormulario();
    });

    const inputBusca = document.getElementById("campo-busca");
    inputBusca.addEventListener("input", manipularBuscaPensamentos)
})

async function manipularSubmissaoFormulario(evento) {
    evento.preventDefault()

    const id = idPensamento.value;
    const conteudo = conteudoPensamento.value;
    const autoria = autoriaPensamento.value;

    try {
        if (id) {
            await api.editarPensamento({id, conteudo, autoria});

        } else {
            await api.salvarPensamento({conteudo, autoria});
        }

        ui.renderizarPensamentos();
        ui.limparFormulario();
    } catch {
        alert("Erro ao salvar Pensamento!");
    }
}

async function manipularBuscaPensamentos() {
    const termoBusca = document.getElementById("campo-busca").value;

    try {
        const pensamentosFiltrados = await api.buscarPensamentosPorPalavraChave(termoBusca)
        ui.renderizarPensamentos(pensamentosFiltrados);
    } catch (error) {
        alert("Erro ao filtrar Pensamentos!");
    }
}