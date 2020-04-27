import React from 'react';
import './App.css';
import Carrinho from './components/Carrinho'
import styled from 'styled-components'
import Home from './components/Home';

const ContainerApp = styled.div`
padding: 10px;
  /* display: grid;
  grid-template-columns: 6fr 1fr;
  gap: 10px;
   */
`
const HomeContainer = styled.div`
  grid-column: 1/2;
`
const ContainerCarrinho = styled.div`
  grid-column: 2/3;
`

class App extends React.Component {
  state = {
    produtos: [{
      id: 1,
      name: "Ônibus espacial",
      value: 2000000000,
      imageUrl: "https://images.pexels.com/photos/39603/space-shuttle-liftoff-atlantis-rocket-39603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "Robô",
      value: 2500000,
      imageUrl: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Foguete",
      value: 3000000000,
      imageUrl: "https://images.pexels.com/photos/355906/pexels-photo-355906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      name: "Telescópio",
      value: 998,
      imageUrl: "https://images.pexels.com/photos/3915455/pexels-photo-3915455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 5,
      name: "Apolo11",
      value: 6000000000,
      imageUrl: "https://images.pexels.com/photos/65704/kazakhstan-soyuz-rocket-space-65704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 6,
      name: "Aeronave dual color",
      value: 100000000,
      imageUrl: "https://images.pexels.com/photos/946071/pexels-photo-946071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 7,
      name: "Roupa espacial",
      value: 38000,
      imageUrl: "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 8,
      name: "Rochas meteoro",
      value: 850,
      imageUrl: "https://images.pexels.com/photos/326612/pexels-photo-326612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }
    ],
    ordemPreco: 'crescente'
  }

  render() {

    return (<div className="App" >
      <ContainerApp>
        <HomeContainer>
          <Home state={this.state} />
        </HomeContainer>
        {/* <ContainerCarrinho>
          <Carrinho />
        </ContainerCarrinho> */}
      </ContainerApp>
    </div>
    );
  }
}

export default App;