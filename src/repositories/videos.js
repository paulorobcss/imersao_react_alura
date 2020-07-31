function create(objetoDoVideo) {
    const URL = 'http://localhost:8080/videos?_embed=videos'

    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetoDoVideo)
    })
        .then(async (respostaDoServidor) => {
            if(respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json()
                return resposta
            }
        })
}

export default {create}