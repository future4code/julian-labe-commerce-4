import React from 'react'
import styled from 'styled-components'
import Filtros from './Filtros'

const Container = styled.div`
display: flex;
flex-direction: column;
`
const SelectContainer = styled.div`
 
`
const FiltroContainer = styled.div`
  
`
const Select = styled.select`
  width: 150px;
`

class Home extends React.Component {
    state = {
        ordemPreco: 'crescente'
    }

    onChangePreco = (event) => {
        this.setState({ ordemPreco: event.target.value })
    }

    render() {
        const listaProdutos = this.props.state
        console.log('Home', listaProdutos.produtos)

        let i = 0
        let ordem

        const lista = listaProdutos.produtos.map((produto, index) => {
            i++
            return (produto)
        }).sort(function (a, b) {
            return a.value - b.value
        })

        const lista2 = listaProdutos.produtos.map((produto, index) => {
            return (produto)
        }).sort(function (a, b) {
            return b.value - a.value
        })

        if (this.state.ordemPreco === 'crescente') {
            ordem = lista
        } else if (this.state.ordemPreco === 'decrescente') {
            ordem = lista2
        }


        return (
            <Container>
                <SelectContainer>
                    <p> QUANTIDADE DE PRODUTOS: {i} </p>
                    <Select value={this.state.ordemPreco}
                        onChange={this.onChangePreco} >
                        <option value="crescente" > Preço: Crescente </option>
                        <option value="decrescente" > Preço: Decrescente </option>
                    </Select >
                </SelectContainer>
                <FiltroContainer>
                    <Filtros state={ordem} />
                </FiltroContainer>
            </Container>
        )
    }
}

export default Home;