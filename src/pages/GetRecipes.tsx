import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IRecipes } from '../interfaces';
import RecipeBox from '../components/RecipeBox';
import {
  CategoryContainer,
  CategoryItemsContainer,
} from '../components/styles/Container.styled';

const GetRecipes = ({ recipeSearch }: { recipeSearch: string }): JSX.Element => {
  const [recipes, setRecipes] = useState<IRecipes[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setRecipes([]);
    setLoading(true);

    const fetchRecipes = async (): Promise<void> => {
      try {
        const fetchUrl = (): string => {
          if (id) {
            return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
          } else {
            return `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeSearch}`;
          }
        };

        const result = await fetch(fetchUrl());
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
  }, [recipeSearch, id]);

  return (
    <>
      <CategoryContainer>
        {loading && <h1>Loading...</h1>}
        {!recipes && <h1>Can't find any recipes for {recipeSearch}</h1>}
        {!id && !loading && recipes && (
          <h1>Search result for {recipeSearch}</h1>
        )}
        {id && !loading && <h1>{id}</h1>}

        {recipes && !loading && (
          <>
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

export default GetRecipes;
