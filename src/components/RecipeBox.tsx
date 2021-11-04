import { IRecipes } from '../interfaces';
import { Link} from 'react-router-dom';
import {Container, ImageContainer, TextContainer} from './styles/RecipeBox.styled'

const RecipeBox = ({ idMeal, strMealThumb, strMeal }: IRecipes) => {
  return (
    <Container>
      <ImageContainer>
        <Link to={`recipe/${idMeal}`}>
          <img src={strMealThumb} alt={strMeal} />
        </Link>
      </ImageContainer>
      <TextContainer>
        <Link to={`recipe/${idMeal}`}>
          <h2>{strMeal}</h2>
        </Link>
      </TextContainer>
    </Container>
  );
};

export default RecipeBox;
