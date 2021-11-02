import React from 'react';
import styled from 'styled-components';
import { IRecipes } from '../interfaces';

const Container = styled.div`
  width: 270px;
  border: 1px solid grey;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  justify-self: flex-start;
  align-self: flex-start;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 15px;

  a {
    text-decoration: none;
    color: black;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

const RecipeBox = ({ idMeal, strMealThumb, strMeal }: IRecipes) => {
  return (
    <Container>
      <ImageContainer>
        <a href={`recipe/${idMeal}`}>
          <img src={strMealThumb} alt={strMeal} />
        </a>
      </ImageContainer>
      <TextContainer>
        <a href={`recipe/${idMeal}`}>
          <h2>{strMeal}</h2>
        </a>
      </TextContainer>
    </Container>
  );
};

export default RecipeBox;
