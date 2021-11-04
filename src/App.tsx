import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import NavBar from './components/NavBar';
import CategorySlider from './pages/CategorySlider';
import RecipeDetails from './pages/RecipeDetails';
import GetRecipes from './pages/GetRecipes';
import theme from './components/styles/theme'

function App() {
  const [recipeSearch, setRecipeSearch] = useState('');

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar setRecipeSearch={setRecipeSearch} />
        <Switch>
          <Container>
            <Route exact path="/" component={CategorySlider} />
            <Route exact path="/categories/:id" component={GetRecipes} />
            <Route exact path="/recipe/:id" component={RecipeDetails} />
            <Route
              exact
              path="/categories/recipe/:id"
              component={RecipeDetails}
            />
            <Route path="/search">
              <GetRecipes recipeSearch={recipeSearch} />
            </Route>
          </Container>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
