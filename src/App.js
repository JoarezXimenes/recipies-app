import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksByIngredients from './pages/ExploreDrinksByIngredients';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsByIngredients from './pages/ExploreFoodsByIngredients';
import ExploreFoodsByNationality from './pages/ExploreFoodsByNationality';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import InProgress from './pages/InProgress';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id">
        <Details type="Meal" />
      </Route>
      <Route exact path="/drinks/:id">
        <Details type="Drink" />
      </Route>
      <Route exact path="/foods/:id/in-progress">
        <InProgress type="Meal" />
      </Route>
      <Route exact path="/drinks/:id/in-progress">
        <InProgress type="Drink" />
      </Route>
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodsByIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinksByIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodsByNationality }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;

// Tela de login: /;
// Tela principal de receitas de comidas: /foods;
// Tela principal de receitas de bebidas: /drinks;
// Tela de detalhes de uma receita de comida: /foods/{id-da-receita};
// Tela de detalhes de uma receita de bebida: /drinks/{id-da-receita};
// Tela de receita em progresso de comida: /foods/{id-da-receita}/in-progress;
// Tela de receita em progresso de bebida: /drinks/{id-da-receita}/in-progress;
// Tela de explorar: /explore;
// Tela de explorar comidas: /explore/foods;
// Tela de explorar bebidas: /explore/drinks;
// Tela de explorar comidas por ingrediente: /explore/foods/ingredients;
// Tela de explorar bebidas por ingrediente: /explore/drinks/ingredients;
// Tela de explorar comidas por nacionalidade: /explore/foods/nationalities;
// Tela de perfil: /profile;
// Tela de receitas feitas: /done-recipes;
// Tela de receitas favoritas: /favorite-recipes.
