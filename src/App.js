import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import IssueCard from './components/IssueCard';
import axios from 'axios';

class App extends React.Component{

  state = {
    infoArray: [],
    search: ""
  }

  sendSearch = (data) => {//iria serach pero como no se utliza nada, todo bien
    //aca vamos a hacer la llamada a la API
    this.setState({search:data}) 
  }

  getAllIssues = () => {//iria serach pero como no se utliza nada, todo bien
    //aca vamos a hacer la llamada a la API
    axios.get(`https://api.github.com/repos/facebook/react/issues`)
    .then(
      ({data})=>this.setState({infoArray: data})
      );
  }

  componentDidMount(){
    this.getAllIssues();
    //this.sendSearch();
    console.log("On component didmount")
}

  render(){// se cambia de tipo funcion a clase con render sin cosntructor
    console.log('2. En render')
    //this.getAllIssues();
    console.log(this.state.infoArray)
    //this.getAllIssues();
    return (
        
          <div className="App">
            <h1>Welcome to the React Issue Finder</h1>
            <SearchBar emitSearch={this.sendSearch} />
              <div className="grid-cards">
                {
                  < IssueCard information={this.state.infoArray} filter={this.state.search}/>
                }
                {/*
                this.state.infoArray.filter(
                    (data) =>{
                        return data.title.includes(this.state.search);
                    }).map(
                      data=>{
                        console.log(data.title);
                        return(
                            <div className="image-container" key ={data.id}>
                                <h1>
                                  (<IssueCard tittle={data.tittle}/>)
                                </h1>
                            </div>
                            //<DataField key={data.id} data={data} />
                        )
                    })
                  */}
              </div>
          </div>
    );
  }
}

export default App;