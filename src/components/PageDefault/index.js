import React from 'react'
import Menu from '../menu/index.js'
import Footer from '../Footer/index.js'
import styled from 'styled-components'

const Main = styled.main`
    background-color: #242c37;
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({children}) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault