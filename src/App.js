import React from 'react';
import './App.css';
import Produtos from './components/Produtos'
import Carrinho from './components/Carrinho'

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=1",
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=2",
      },
      {
        id: 3,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=3",
      },
      {
        id: 4,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=4",
      },
      {
        id: 5,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=5",
      },
      {
        id: 6,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=6",
      },
      {
        id: 7,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=7",
      },
      {
        id: 8,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=8",
      }
    ]
  }
  render() {
    const listaDeProdutos = this.state.produtos.map((produto, index) => {
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
        <Carrinho></Carrinho>
        <div>
          <p>Quantidade de Produtos: </p>
          <select>
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
