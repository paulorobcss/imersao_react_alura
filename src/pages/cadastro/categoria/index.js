import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index.js'
import FormField from '../../../components/FormField/index.js';
import Button from '../../../components/Button/index.js';
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([])
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#242c37',
        cor_letra: '#11dc00',
    }
    const {values, handleChange, clearForm} = useForm(valoresIniciais);

    useEffect(() => {
        const URL = 'http://localhost:8080/categorias'
        fetch(URL)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json()
                setCategorias([
                    ...resposta
                ])
            })
    }, [])

    return(
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(info){
                info.preventDefault()
                setCategorias([
                    ...categorias, // Adiciona o que for escrito ao já existente
                    values
                ]);
                clearForm(valoresIniciais)
            }}>

                <FormField 
                    label='Nome da Categoria:'
                    type='text'
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label='Descrição:'
                    type='textarea'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    label='Cor:'
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />

                <FormField 
                    label='Cor da Letra:'
                    type='color'
                    name='cor_letra'
                    value={values.cor_letra}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Carregando...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => {
                    return(
                        <li key={`${categoria.titulo}`}>
                            {categoria.titulo}
                        </li>
                    )
                })}
            </ul>

            <Button>
                <Link to='/' style={{textDecoration: 'none'}}>
                    Ir para home.
                </Link>
            </Button>
        </PageDefault>
    )
}

export default CadastroCategoria