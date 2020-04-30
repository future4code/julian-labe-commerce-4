import React from 'react'
import styled from 'styled-components'

const ProdutosContainer = styled.div`
    border: 1px solid;
    width: 180px;
    height: 220px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`
const Imagem = styled.img`
    width: 100%;
    height: 50%;
    font-size: 15px;
`
const Paragrafo = styled.p`
    margin: 0 5px;
`
const Botao = styled.button`
    width: 100%;
    margin: 0;
`

class Produto extends React.Component {    

    render() {
        const id = this.props.id
        
        return (
            <ProdutosContainer>
                <Imagem src={this.props.image} />
                <Paragrafo>{this.props.name}</Paragrafo>
                <Paragrafo>R$ {this.props.value}</Paragrafo>
                <Botao onClick={this.props.onClickComprar}>Adicionar o Carrinho</Botao>
            </ProdutosContainer>
        )
    }
}

export default Produto;