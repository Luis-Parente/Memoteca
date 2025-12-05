import api from "./api.js";

export const ui = {
    async renderizarPensamentos() {
        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(ui.criarElementoPensamento);
        } catch {
            alert("Erro ao renderizar Pensamentos");
        }
    },

    async criarElementoPensamento(pensamento) {
        const ulListaPensamento = document.getElementById("lista-pensamentos");

        const liPensamento = document.createElement("li");
        liPensamento.setAttribute("data-id", pensamento.id);
        liPensamento.classList.add("li-pensamento");

        const imgIconeAspas = document.createElement('img');
        imgIconeAspas.src = "assets/imagens/aspas-azuis.png";
        imgIconeAspas.alt = "Aspas azuis";
        imgIconeAspas.classList.add("icone-aspas");

        const divPensamentoConteudo = document.createElement("div");
        divPensamentoConteudo.textContent = pensamento.conteudo;
        divPensamentoConteudo.classList.add("pensamento-conteudo");

        const divPensamentoAutoria = document.createElement("div");
        divPensamentoAutoria.textContent = pensamento.autoria;
        divPensamentoAutoria.classList.add("pensamento-autoria");

        liPensamento.appendChild(imgIconeAspas);
        liPensamento.appendChild(divPensamentoConteudo);
        liPensamento.appendChild(divPensamentoAutoria);

        ulListaPensamento.appendChild(liPensamento);
    },

    async limparFormulario() {
        document.getElementById("pensamento-form").reset();
    }
}

export default ui;