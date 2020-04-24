import React from 'react';
import './App.css';
import Produtos from './components/Produtos'

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 990,
        imageUrl: "https://picsum.photos/400/400?a=1",
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 30,
        imageUrl: "https://picsum.photos/400/400?a=2",
      },
      {
        id: 3,
        name: "Foguete da Missão Apollo 11",
        value: 40,
        imageUrl: "https://picsum.photos/400/400?a=3",
      },
      {
        id: 4,
        name: "Foguete da Missão Apollo 11",
        value: 20,
        imageUrl: "https://picsum.photos/400/400?a=4",
      },
      {
        id: 5,
        name: "Foguete da Missão Apollo 11",
        value: 60,
        imageUrl: "https://picsum.photos/400/400?a=5",
      },
      {
        id: 6,
        name: "Foguete da Missão Apollo 11",
        value: 100,
        imageUrl: "https://picsum.photos/400/400?a=6",
      },
      {
        id: 7,
        name: "Foguete da Missão Apollo 11",
        value: 90,
        imageUrl: "https://picsum.photos/400/400?a=7",
      },
      {
        id: 8,
        name: "Foguete da Missão Apollo 11",
        value: 80,
        imageUrl: "https://picsum.photos/400/400?a=8",
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
    }).sort(function (a, b) {
      return a.value - b.value
    })

    const lista2 = this.state.produtos.map((produto, index) => {
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
      <div className="App">
        <div>
          <p>Quantidade de Produtos: {i}</p>
          <select value={this.state.ordemPreco} onChange={this.onChangePreco}>
            <option value="crescente">Preço: Crescente</option>
            <option value="decrescente">Preço: Decrescente</option>
          </select>
          {ordem.map((produto, index) => {
            return (
              <Produtos key={index}
                name={produto.name}
                value={produto.value}
                image={produto.imageUrl}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
