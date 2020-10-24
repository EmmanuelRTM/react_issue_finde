import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import axios from 'axios';

class App extends React.Component{

  state = {
    results:[],
    history: []
  }

  sendSearch = (search) => {
    //aca vamos a hacer la llamada a la API
    axios.get(`https://api.giphy.com/v1/gifs/search?limit=10&q=${search}&api_key=Z5zoDfSxy4xfiuwD7y2co94CWGDD81sW`)
        .then((response)=>{
            this.setState({results: response.data.data})
        })
  }

  componentWillMount(){
    console.log('1. Antes de que ser ejecute el render')
  }
  componentDidMount(){
    console.log('3. Despues de render')
  }

  render(){// se cambia de tipo funcion a clase con render sin cosntructor
    console.log('2. En render')
    return (
          <div className="App">
            <SearchBar emitSearch={this.sendSearch} />
              <div className="grid-cards">
                {
                  this.state.results.map(gif =>(< ImageCard url={gif.images.fixed_width.url} />))
                }
              </div>
          </div>
    );
  }
}

export default App;