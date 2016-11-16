import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Incluimos package de búsqueda de youtube
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//ID api youtube
const API_KEY = 'AIzaSyBNlZxTAAhtf8wO_JF-BoZxFZm-zcaocWI';



//Todos los componentes formaran parte de App y todos utilizarán la información buscada en youtube, por lo que tiene sentido
//que sea en el index.js dónde se realice la búsqueda
//Create a new component. This component should produce some HTML
class App extends Component{
    constructor(props){
        super(props);

         //La búsqueda nos retorna un array de videos, por eso lo indicamos con los corchetes
        this.state ={ 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
       
    }

    videoSearch(term){
        //Realizamos la búsqueda en youtube
        YTSearch({key: API_KEY, term:term}, (videos) => {
            //ES6 entiende que la variable se llama igual que la propiedad y lo traduce a: this.setState({ videos: videos});
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        //llama la función sólo cada 300 milisegundos
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},500);
        //Mediante una propiedad en el jsx podemos pasar datos del componente padre al hijo.
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
   
}
//Take this component's generated HTML and put it on the page (in the DOM)
React.render(<App />, document.querySelector('.container'));