import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import RecipeListContainer from './recipes/containers/RecipeListContainer'
import RecipeDetailContainer from './recipes/containers/RecipeDetailContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Marley Spoon Recipes</h4>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/recipes" />
          </Route>
          <Route path="/recipes/:id" component={RecipeDetailContainer} exact />
          <Route path="/recipes" component={RecipeListContainer} exact />
        </Switch>
      </header>
    </div>
  )
}

export default App
