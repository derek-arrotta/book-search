import React, { Component } from 'react';
import SearchForm from './searchForm'
import './App.css'

class App extends Component {
  
  /*
  componentDidMount() {
    const q = 'daniel keyes'; //Search for volumes that contain this text string
    const printType = 'books'; //'all', 'books', or 'magazines'
    const key = 'AIzaSyBbwfVgB3Tm0styebgMNI-I_Zw7WjRqDUo'; // API key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${q}&printType=${printType}&key=${key}`; 

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => {
        console.log(err.message)
      });
    
  }
  */

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchForm />
        <main>
          
        </main>
      </div>
    );
  }

}

export default App;