import React from 'react'
import styled from 'styled-components'

const MenuEsquerdo = styled.div`
margin-top: 15px;
    /* margin: 0;
    padding: 0;
    width: 20vw;
    height: 97vh;
    position: relative;
    top: 0;
    right: 0px;
    border: 1px solid white; */
`
const Paragrafo = styled.p`
margin:2px;
`



class Carrinho extends React.Component {

    state = {
        valor: 0
    }

    render() {
        return (
            <MenuEsquerdo>
                <Paragrafo>{this.props.name}</Paragrafo>
                <Paragrafo>R$ {this.props.value}</Paragrafo>
                <button onClick={this.props.onClickApagar}>Excluir</button>
            </MenuEsquerdo>
        )
    }
}

export default Carrinho