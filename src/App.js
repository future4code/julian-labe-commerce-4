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

    ordemPreco: 'crescente'
  }

  onChangePreco = (event) => {
    this.setState({ ordemPreco: event.target.ordemPreco })
  }

  render() {

    // const listaOrdenada = this.state.produtos.map((produto, index) => {

    //   switch (this.state.ordemPreco) {
    //     case 'crescente':
    //       return ordemCrescente

    //     case 'decrescente':
    //       return ordemDecrescente
    //     default:
    //       return true
    //   }
    // })
    // console.log(listaOrdenada)

    let i = 0

    const ordemCrescente = this.state.produtos.sort(function (a, b) {
      return a.value - b.value
    })
    console.log('crescente', ordemCrescente)
    // const ordemCrescente = this.state.produtos.sort(function (a, b) {
    //   return b.value - a.value
    // })
    //console.log('cres', ordemCrescente)
    
    let ordem
    switch (this.state.ordemPreco) {
      case 'crescente':
        ordem = ordemCrescente
        break

      case 'decrescente':
        ordem = ordemCrescente
        break

      default:
        return true
    }



    const listaDeProdutos = ordemCrescente.map((produto, index) => {

      i++

      return (
        <Produtos key={index}
          name={produto.name}
          value={produto.value}
          image={produto.imageUrl}
        />
      )
    })

    return (
      <div className="App">
        <div>
          <p>Quantidade de Produtos: {i}</p>
          <select value={this.state.ordemPreco} onChange={this.onChangePreco}>
            <option value='crescente'>Preço: Crescente</option>
            <option value='decrescente'>Preço: Decrescente</option>
          </select>
          {listaDeProdutos}
        </div>
      </div>
    );
  }
}

export default App;
