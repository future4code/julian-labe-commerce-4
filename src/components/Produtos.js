import React from 'react'
import styled from 'styled-components'

const ProdutosContainer = styled.div`
    
`
const Produtos = styled.div`
    
`

class Produto extends React.Component {
     
    onClickComprar = () =>{
       
     
        console.log('clicou')

    }


    render() {
        return (
            <ProdutosContainer>
                <Produtos>
                    <img src={this.props.image} />
                    <p>{this.props.name}</p>
                    <p>R$ {this.props.value}</p>
                    <button onClick={this.onClickComprar}>Adicionar o Carrinho</button>
                </Produtos>
            </ProdutosContainer>
        )
    }
}

export default Produto;