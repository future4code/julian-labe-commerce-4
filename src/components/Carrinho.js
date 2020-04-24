import React from 'react'
import styled from 'styled-components'
import Produtos from './Produtos'

const MenuEsquerdo = styled.div`
    margin: 0;
    padding: 0;
    width: 20vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0px;
    border: 1px solid black;
`



class Carrinho extends React.Component{

    state = {
        valor: 0
    }

    render(){
        return(
            <MenuEsquerdo>
            <h1>Carrinho:</h1>
            <h3>Total: {this.state.valor}</h3>
            </MenuEsquerdo>
        )
    }
}

export default Carrinho