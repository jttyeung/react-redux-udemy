import React from 'react';
import ReactDOM from 'react-dom';
import config from './../production.config';
import SearchBar from './components/search_bar';


// const config = require('./production.config');
const YOUTUBE_API_KEY = config.youtube;
const App = () => {
    return (
    <div>
      <SearchBar />
    </div>
    );
};



ReactDOM.render(<App />, document.querySelector('.container'));

