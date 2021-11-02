import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Container } from '../components/styles/RecipeDetails.styled';

interface IRecipe {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe);
  const { id } = useParams<{ id: string }>();

  const ImageContainer = styled.div`
    height: 400px;
    width: 100%;
    position: relative;
    margin: 15px 0;

    img {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: contain;
      object-position: center;
    }
  `;

  useEffect(() => {
    const fetchRecipe = async (): Promise<void> => {
      try {
        const result = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await result.json();
        console.log(data.meals[0]);
        setRecipe(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, []);

  const { strMeal, strMealThumb, strInstructions } = recipe;
  return (
    <Container>
        <h2>{strMeal}</h2>
      <ImageContainer>
        <img src={strMealThumb} alt={strMeal} />
      </ImageContainer>
      
      <p>{strInstructions}</p>
    </Container>
  );
};

export default RecipeDetails;
