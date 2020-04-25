import React from 'react'
import styled from 'styled-components'
import Produtos from './Produtos'

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 5fr;
gap: 10px;
`
const FiltrosContainer = styled.div`
display: flex;
flex-direction: column;
grid-column: 1/2;
`
const ListaDeProdutos = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
grid-column: 2/3;
gap: 1px;
`

class Filtros extends React.Component {
    state = {
        minimo: '',
        maximo: '',
        buscaProduto: ''
    }

    onChangeMinimo = (event) => {
        this.setState({ minimo: event.target.value })
    }

    onChangeMaximo = (event) => {
        this.setState({ maximo: event.target.value })
    }

    onChangeBusca = (event) => {
        this.setState({ buscaProduto: event.target.value })
    }

    render() {
        const produtos = this.props.state
        const inputMinusculo = this.state.buscaProduto.toLowerCase()

        const buscaNome = produtos.filter(produto => {
            let produtoNome = produto.name.toLowerCase()
            return produtoNome.search(inputMinusculo) !== -1
        })

        const filtro = buscaNome.filter(produto => {
            if (((produto.value >= this.state.minimo) && (produto.value <= this.state.maximo)) ||
                ((produto.value >= this.state.minimo) && (this.state.maximo === '')) ||
                ((this.state.minimo === '') && (this.state.maximo === ''))) {
                return produto
            }
        })

        console.log('filtro', filtro)

        return (
            <Container>
                <FiltrosContainer>
                    <h2>Filtros</h2>
                    <label>Valor Mínimo</label>
                    <input type='Number' value={this.state.minimo} onChange={this.onChangeMinimo}></input>
                    <label>Valor Máximo</label>
                    <input type='Number' value={this.state.maximo} onChange={this.onChangeMaximo}></input>
                    <label>Buscar Produto</label>
                    <input value={this.state.buscaProduto} onChange={this.onChangeBusca}></input>
                </FiltrosContainer>
                <ListaDeProdutos>
                    {
                        filtro.map((produto, index) => {
                            return (
                                <Produtos key={index}
                                    name={produto.name}
                                    value={produto.value}
                                    image={produto.imageUrl}
                                />
                            )
                        })
                    }
                </ListaDeProdutos>
            </Container>
        )
    }
}

export default Filtros;