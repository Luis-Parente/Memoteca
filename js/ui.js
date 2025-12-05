import api from "./api.js";

export const ui = {
    async renderizarPensamentos() {
        const ulListaPensamento = document.getElementById("lista-pensamentos");

        try {
            const pensamentos = await api.buscarPensamentos();

            pensamentos.forEach((pensamento) => {
                ulListaPensamento.innerHTML += `
                    <li class="li-pensamento" data-id="${pensamento.id}">
                        <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                        <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                        <div class="pensamento-autoria">${pensamento.autoria}</div>
                    </li>
                `
            })
        } catch {
            alert("Erro ao renderizar Pensamentos");
        }
    }
}

export default ui;