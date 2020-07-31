import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index.js';
import Button from '../../../components/Button/index.js';
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
    let history = useHistory()
    const [categorias, setCategorias] = useState([])
    const {values, handleChange} = useForm({});
    const categoryTitles = categorias.map(({titulo}) => titulo)

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer)
            })
    }, [])

    return(
        <PageDefault>
            <h1>Cadastro de vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault()
                alert('Vídeo Cadastrado!')
                
                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria
                })

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Cadastrou com sucesso')
                        history.push('/')
                    })

            }}>
                <FormField
                    label='Título:'
                    name='titulo'
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label='URL:'
                    name='url'
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField
                    label='Categoria:'
                    name='categoria'
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />

                <Button type='submit'>
                    Cadastrar
                </Button>
            </form>

            <Button>
                <Link to='/cadastro/categoria' style={{textDecoration: 'none'}}>
                    Nova categoria
                </Link>
            </Button>
        </PageDefault>
    )
}

export default CadastroVideo