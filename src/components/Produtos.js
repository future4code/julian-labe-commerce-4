import React from 'react'
import styled from 'styled-components'

const ProdutosContainer = styled.div`
`
const Produtos = styled.div`
    border: 1px solid;
    width: 200px;
    height: 280px;
    margin-top: 10px; 
`

const Imagem = styled.img`
    width: 100%;
    height: 50%;
    font-size: 15px;
`

class Produto extends React.Component {
    render() {
        return (
            <ProdutosContainer>
                <Produtos>
                    <Imagem src={this.props.image} />
                    <p>{this.props.name}</p>
                    <p>R$ {this.props.value}</p>
                    <button>Adicionar o Carrinho</button>
                </Produtos>
            </ProdutosContainer>
        )
    }
}

export default Produto;