import React from 'react';

//function component JS. 
//const SearchBar = () =>{
//    return <input />; //React.createElement
//};


//Class component ES6. Es una clase, es más complejo, nos permitirá crearle metodos y propiedades. De este modo podremos desde la clase informar que está escribiendo el usuari en el imput, etc...
//Damos toda la funcionalidad del React.Component a la clase mediante el extend.
//Cada clase ha de tener su objeto estado. De este modo cada vez que el componente estado cambia, se renderiza la clase  y todos sus hijos.
class SearchBar extends React.Component {
    //Inicializamos el estado.    
    constructor (props){
        //Si no ponemos esta línea tendremos un error.
        super(props); //Poniendo esto hacemos que se puede llamar al constructor desde la clase padre. 

        //term es una variable 
        this.state = {term: '' };
    }
    //Definir metodos a una clase. Los metodos siempre han de devolver JSX.
    render(){
        //return <input onChange ={event => console.log(event.target.value)}/>;
        return (
            <div className="search-bar">
                <input
                    value ={this.state.term} 
                    onChange ={event => this.onInputChange(event.target.value) }/>                
            </div>
        );
    }

    onInputChange(term){        
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    //Creamos un Event Handler con un método para detectar cualquier cambio de texto (Lo llamamos directamente arriba)
    //onInputChange(event){
    //    console.log(event.target.value);
    //}
}

//Con esto indicamos que al hacer imort en el index.js, no lo haga de todo el fichro, solo de la SearchBar
export default SearchBar;