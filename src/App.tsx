import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import NavBar from './components/NavBar';
import CategorySlider from './pages/CategorySlider';
import CategoryRecipes from './pages/CategoryRecipes';
import RecipeDetails from './pages/RecipeDetails';
import Search from './pages/Search';

const theme = {
  colors: {
    main: 'orange',
    header: 'black',
    text: 'grey',
  },
  mobile: '768px',
};

function App() {
  const [recipeSearch, setRecipeSearch] = useState('');

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar setRecipeSearch={setRecipeSearch} />
        <Switch>
          <Container>
            <Route exact path="/" component={CategorySlider} />
            <Route exact path="/categories/:id" component={CategoryRecipes} />
            <Route exact path="/recipe/:id" component={RecipeDetails} />
            <Route
              exact
              path="/categories/recipe/:id"
              component={RecipeDetails}
            />
            <Route path="/search">
              <Search recipeSearch={recipeSearch} />
            </Route>
          </Container>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
