import React from 'react'
import styled from 'styled-components'

const FiltrosContainer = styled.div`
display: flex;
flex-direction: column;
`

class Filtros extends React.Component {
    state = {
        minimo: '',
        maximo: '',
        buscaProduto: ''
    }

    onChangeMinimo = (event) => {
        this.setState({minimo: event.target.value})
    }

    onChangeMaximo = (event) => {
        this.setState({maximo: event.target.value})
    }

    onChangeBusca = (event) => {
        this.setState({buscaProduto: event.target.value})
    }
    
    render() {

        // const filtro = this.props.filter = (produto => {
        //     return produto
        // })

        console.log(this.state.minimo,this.state.maximo,this.state.buscaProduto)
        return (
            <FiltrosContainer>
                <h2>Filtros</h2>
                <label>Valor Mínimo</label>
                <input type='Number' value={this.state.minimo} onChange={this.onChangeMinimo}></input>
                <label>Valor Máximo</label>
                <input type='Number' value={this.state.maximo} onChange={this.onChangeMaximo}></input>
                <label>Buscar Produto</label>
                <input value={this.state.buscaProduto} onChange={this.onChangeBusca}></input>
            </FiltrosContainer>
        )
    }
}

export default Filtros;