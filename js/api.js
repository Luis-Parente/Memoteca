const API_URL = "http://localhost:3000/pensamentos"

export const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch(API_URL);
            return await response.json();
        } catch {
            alert("Erro ao buscar Pensamentos");
            throw Error;
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch {
            alert("Erro ao salvar Pensamento");
            throw Error;
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`)
            return await response.json();
        } catch {
            alert("Erro ao buscar Pensamento");
            throw Error;
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`${API_URL}/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch {
            alert("Erro ao editar Pensamento");
            throw Error;
        }
    }
}

export default api;