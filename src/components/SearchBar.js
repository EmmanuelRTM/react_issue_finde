import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component{
    /*constructor(){
        super();
    }*/
    state = {
        search:""
    }

    //this.state para manejar el estado interno del componente 
    //this.props para obtener las propiedades que nos pasa el componente padre

    render(){

        return (
            <div className="search-bar">
                <input 
                    placeholder="Search" 
                    name="search"
                    className="search-input"
                    onChange={(event) => {
                        //onChange se ejecuta cada  ez que el usuarioo modifica allgo en el input
                        //onChange recibe un callback con el evento y asi saber el valor del input
                        // cada vez que el usaurio teclea algo en el input lo guardamos en el estado
                        
                        this.setState({search: event.target.value})
                    }}
                ></input>
                <button
                    className="search-button"
                    onClick={() => this.props.emitSearch(this.state.search)}
                    //this.sendSearch() asi lo ejecutaria el padre
                >Buscar</button>
            </div>
        )
    }
}

export default SearchBar;