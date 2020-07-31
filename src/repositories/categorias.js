function getAll() {
    const URL = 'http://localhost:8080/categorias'

    return fetch(URL)
        .then(async (respostaDoServidor) => {
            if(respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json()
                return resposta
            }
        })
}
function getAllWithVideos() {
    const URL = 'http://localhost:8080/categorias?_embed=videos'

    return fetch(URL)
        .then(async (respostaDoServidor) => {
            if(respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json()
                return resposta
            }
        })
}

export default {getAllWithVideos, getAll}