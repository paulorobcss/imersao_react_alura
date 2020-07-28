import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index.js'

function CadastroCategoria() {
    return(
        <PageDefault>
            <h1>Cadastro de categoria.</h1>

            <form action="">
                <label>
                    Nome da categoria:
                    <input type="text"/>
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to='/'>
                Ir para home.
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria