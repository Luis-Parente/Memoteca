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

        const btnEditar = document.createElement("button");
        btnEditar.classList.add("botao-editar");

        btnEditar.onclick = async e => {
            ui.preencherFormulario(pensamento.id);
        }

        const imgBotaoEditar = document.createElement("img");
        imgBotaoEditar.src = "assets/imagens/icone-editar.png"
        imgBotaoEditar.alt = "Botao editar";

        btnEditar.appendChild(imgBotaoEditar);

        const divBotoes = document.createElement("div");
        divBotoes.classList.add("icones");
        divBotoes.appendChild(btnEditar);

        liPensamento.appendChild(imgIconeAspas);
        liPensamento.appendChild(divPensamentoConteudo);
        liPensamento.appendChild(divPensamentoAutoria);
        liPensamento.appendChild(divBotoes);

        ulListaPensamento.appendChild(liPensamento);
    },

    async limparFormulario() {
        document.getElementById("pensamento-form").reset();
    },

    async preencherFormulario(pensamentoId) {
        const pensamento = await api.buscarPensamentoPorId(pensamentoId);

        const elementoPensamentoId = document.getElementById("pensamento-id");
        const elementoPensamentoConteudo = document.getElementById("pensamento-conteudo");
        const elementoPensamentoAutoria = document.getElementById("pensamento-autoria");

        elementoPensamentoId.value = pensamento.id;
        elementoPensamentoConteudo.value = pensamento.conteudo;
        elementoPensamentoAutoria.value = pensamento.autoria;
    }
}

export default ui;