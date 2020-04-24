import React from 'react';
import './App.css';
import Produtos from './components/Produtos'

class App extends React.Component {
    state = {
        produtos: [{
                id: 1,
                name: "ÔNIBUS ESPACIAL",
                value: 2000000000,
                imageUrl: "https://images.pexels.com/photos/39603/space-shuttle-liftoff-atlantis-rocket-39603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                id: 2,
                name: "ROBÔ",
                value: 2500000,
                imageUrl: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                id: 3,
                name: "FOGUETE",
                value: 3000000000,
                imageUrl: "https://images.pexels.com/photos/355906/pexels-photo-355906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                id: 4,
                name: "TELESCÓPIO",
                value: 998,
                imageUrl: "https://images.pexels.com/photos/3915455/pexels-photo-3915455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                id: 5,
                name: "FOGUETE ESTILO APOLO11",
                value: 6000000000,
                imageUrl: "https://images.pexels.com/photos/65704/kazakhstan-soyuz-rocket-space-65704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                id: 6,
                name: "AERONAVE DUAL COLOR",
                value: 100000000,
                imageUrl: "https://images.pexels.com/photos/946071/pexels-photo-946071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                id: 7,
                name: "ROUPA PARA TURISMO ESPACIAL",
                value: 38000,
                imageUrl: "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                id: 8,
                name: "ROCHAS METEORO",
                value: 850,
                imageUrl: "https://images.pexels.com/photos/326612/pexels-photo-326612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }
        ],
        ordenagem: [],
        ordemPreco: 'crescente'
    }

    onChangePreco = (event) => {
        this.setState({ ordemPreco: event.target.value })
        console.log('preco', this.state.ordemPreco)
    }

    render() {
        let i = 0
        let ordem

        const lista = this.state.produtos.map((produto, index) => {
            i++
            return (produto)
        }).sort(function(a, b) {
            return a.value - b.value
        })

        const lista2 = this.state.produtos.map((produto, index) => {
            return (produto)
        }).sort(function(a, b) {
            return b.value - a.value
        })

        if (this.state.ordemPreco === 'crescente') {
            ordem = lista
        } else if (this.state.ordemPreco === 'decrescente') {
            ordem = lista2
        }

        return ( <
            div className = "App" >
            <
            div >
            <
            p > QUANTIDADE DE PRODUTOS: { i } < /p> <
            select value = { this.state.ordemPreco }
            onChange = { this.onChangePreco } >
            <
            option value = "crescente" > Preço: Crescente < /option> <
            option value = "decrescente" > Preço: Decrescente < /option> < /
            select > {
                ordem.map((produto, index) => {
                    return ( <
                        Produtos key = { index }
                        name = { produto.name }
                        value = { produto.value }
                        image = { produto.imageUrl }
                        />
                    )
                })
            } <
            /div> < /
            div >
        );
    }
}

export default App;