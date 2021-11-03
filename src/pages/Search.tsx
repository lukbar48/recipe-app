import React, { useState, useEffect } from 'react';
import { IRecipes } from '../interfaces';
import RecipeBox from '../components/RecipeBox';
import {
  CategoryContainer,
  CategoryItemsContainer,
} from '../components/styles/Container.styled';

const Search = ({ recipeSearch }: { recipeSearch: string }): JSX.Element => {
  const [recipes, setRecipes] = useState<IRecipes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipes([]);
    setLoading(true);
    const fetchRecipes = async (): Promise<void> => {
      try {
        const result = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeSearch}`
        );
        const data = await result.json();
        console.log(data);
        setTimeout(() => {
          setRecipes(data.meals);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, [recipeSearch]);

  return (
    <>
      <CategoryContainer>
        {loading && <h1>Loading</h1>}
        {!recipes && <h1>Can't find any recipes for {recipeSearch}</h1>}
        {recipes && !loading && (
          <>
            <h1>Search result for {recipeSearch}</h1>
            <CategoryItemsContainer>
              {recipes.map((recipe) => {
                return <RecipeBox key={recipe.idMeal} {...recipe} />;
              })}
            </CategoryItemsContainer>{' '}
          </>
        )}
      </CategoryContainer>
    </>
  );
};

export default Search;
