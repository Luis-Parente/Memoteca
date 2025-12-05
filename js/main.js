import ui from "./ui.js"
import api from "./api.js"

const idPensamento = document.getElementById("pensamento-id")
const conteudoPensamento = document.getElementById("pensamento-conteudo");
const autoriaPensamento = document.getElementById("pensamento-autoria");

ui.renderizarPensamentos();

const formPensamento = document.getElementById("pensamento-form");
formPensamento.addEventListener("submit", manipularSubmissaoFormulario)

const formCancelar = document.getElementById("botao-cancelar");

formCancelar.addEventListener("click", (evento) => {
    evento.preventDefault();
    ui.limparFormulario();
});

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