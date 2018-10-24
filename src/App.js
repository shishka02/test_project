import React, { Component } from 'react'
import Header from './Header/index'
import ListOfArticles from './Articles/index'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <div className='header'>
          <Header />
        </div>
        <div className='ListOfArticles'>
          <ListOfArticles />
        </div>
      </div>
    )
  }
}

export default App
