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
    }
}

export default api;