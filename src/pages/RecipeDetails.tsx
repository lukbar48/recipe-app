import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Wrapper,
  ImageContainer,
  ListContainer,
} from '../components/styles/RecipeDetails.styled';
import { IRecipe, IIngredients } from '../interfaces';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe);
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchRecipe = async (): Promise<void> => {
      try {
        const result = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await result.json();
        setRecipe(data.meals[0]);

        const getIngredients = (meal: IRecipe) => {
          const ingredientsList: IIngredients[] = [];
          for (let i = 1; i <= 10; i++) {
            if (meal[`strIngredient${i}`]) {
              let newIngredient: IIngredients = {
                ingredient: meal[`strIngredient${i}`],
                measure: meal[`strMeasure${i}`],
              };
              ingredientsList.push(newIngredient);
            } else {
              break;
            }
          }
          setIngredients(ingredientsList);
        };
        getIngredients(recipe);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, [id, recipe]);

  const { strMeal, strMealThumb, strInstructions } = recipe;
  return (
    <Container>
      <h2>{strMeal}</h2>
      <Wrapper>
        <ImageContainer>
          <img src={strMealThumb} alt={strMeal} />
        </ImageContainer>
        <ListContainer>
          {ingredients.map((item, index) => {
            const { ingredient, measure } = item;
            return (
              <li key={index}>
                {ingredient} - {measure}
              </li>
            );
          })}
        </ListContainer>
      </Wrapper>
      <p>{strInstructions}</p>
    </Container>
  );
};

export default RecipeDetails;
