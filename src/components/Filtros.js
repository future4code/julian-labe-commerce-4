import React from 'react'
import styled from 'styled-components'
import Produtos from './Produtos'
import Carrinho from './Carrinho'

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 1fr;
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
const CarrinhoContainer = styled.div`
grid-column: 3/4;
border: 1px solid white;
`

class Filtros extends React.Component {
    state = {
        minimo: '',
        maximo: '',
        buscaProduto: '',
        compras: [],
        total: 0
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

    onClickComprar = (produto) => {
        console.log('clicou', produto)
        this.state.compras.push(produto)
        let somatorio = 0
        const soma = this.state.compras.map(produto => {
            somatorio += produto.value
        })
        this.setState({ total: somatorio })
    }

    componentDidUpdate() {
        console.log('update')
    }

    onClickApagar = (id) => {
        let somatorio = 0

        const novoCarrinho = this.state.compras.filter(produto => {
            if (id !== produto.id) {
                return produto
            }
        })

        this.setState({ compras: novoCarrinho })
        
        if (this.state.compras.length === 0) {
            somatorio = 0
            this.setState({ total: somatorio })
        } else {
            const soma = this.state.compras.map(produto => {
                somatorio += produto.value
            })
        }
    }

    render() {
        const produtos = this.props.state
        const inputMinusculo = this.state.buscaProduto.toLowerCase()

        console.log('somatorio', this.state.total,'compras tamanho',this.state.compras.length)
        
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
                                    id={produto.id}
                                    name={produto.name}
                                    value={produto.value}
                                    image={produto.imageUrl}
                                    onClickComprar={() => this.onClickComprar(produto)}
                                />
                            )
                        })
                    }
                </ListaDeProdutos>
                <CarrinhoContainer>
                    <h3>Carrinho</h3>
                    <p>Total: ${this.state.total}</p>
                    {
                        this.state.compras.map((produto, index) => {
                            return (
                                <Carrinho key={index}
                                    id={produto.id}
                                    name={produto.name}
                                    value={produto.value}
                                    image={produto.imageUrl}
                                    onClickApagar={() => this.onClickApagar(produto.id)}
                                />
                            )
                        })
                    }
                </CarrinhoContainer>
            </Container>
        )
    }
}

export default Filtros;