import React, { Component } from 'react';
//connect React with redux
import { connect } from 'react-redux';

//For binding the action "SelectedBook" to this component
import { selectBook } from '../actions/index';
//For making the acción flow through all the reducres
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) =>{
            return(
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">{book.title}                    
                </li>
            );
        });
    }
    render(){
        return (
            <ul className="list-froup col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}



//Aquesta funció es el lligam entre redux i React, ja que permet que qualsevol cosa
//que retornem aquí estigui disponible com a propietat dintra del component
//Sempre que canviï l'estat aquest component també s'actualitzarà amb el nou estat
function mapStateToProps(state){
    //Qualsevol cosa que retornem aquí estarà 
    //disponible com a propietat dintre del BookList
    return {
        books: state.books
    };
}

//Qualsevol cosa que retorni aquesta funció estarà disponible com a propietats
//dintre del BookList container
function mapDispatchToProps(dispatch){
    //Sempre que la funció selectBook sigui cridada, el resultat es pasarà 
    //a través de tots els reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Agafa la funció (mapStateToProps) i el component (BookList) i genera el container
//El container es un component que utilitza l'estat
//Promote BookList from a component to a container -it needs to know about this new 
//dispatch method, selectBook. Make it available as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList); 