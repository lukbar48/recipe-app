import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IRecipes } from '../interfaces';
import RecipeBox from '../components/RecipeBox';
import {
  CategoryContainer,
  CategoryItemsContainer,
} from '../components/styles/Container.styled';

const CategoryRecipes = (): JSX.Element => {
  const [recipes, setRecipes] = useState<IRecipes[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchRecipes = async (): Promise<void> => {
      try {
        const result = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
        );
        const data = await result.json();
        setRecipes(data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, [id]);

  return (
    <>
      <CategoryContainer>
        <h1>{id}</h1>
        <CategoryItemsContainer>
          {recipes.map((recipe) => {
            return <RecipeBox key={recipe.idMeal} {...recipe} />;
          })}
        </CategoryItemsContainer>
      </CategoryContainer>
    </>
  );
};

export default CategoryRecipes;
