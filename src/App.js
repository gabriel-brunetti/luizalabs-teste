import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SingleHero from './pages/SingleHero'

const getStorageFavorites = () => {
  let favorite = ''
  if (localStorage.getItem('favorite')) {
    favorite = localStorage.getItem('favorite')
  }
  return favorite
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/hero/:id'>
            <SingleHero />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
