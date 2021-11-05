import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IRecipes } from '../interfaces';
import RecipeBox from '../components/RecipeBox';
import {
  RecipesContainer,
  RecipesItemsContainer,
} from '../components/styles/Container.styled';
import Filter from '../components/Filter';

const GetRecipes = ({
  recipeSearch,
}: {
  recipeSearch: string;
}) => {
  const [recipes, setRecipes] = useState<IRecipes[]>([]);
  const [copyRecipes, setCopyRecipes] = useState<IRecipes[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterCategories, setFilterCategories] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setRecipes([]);
    setCopyRecipes([])
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
        setTimeout(() => {
          setRecipes(data.meals);
          setCopyRecipes(data.meals)
          setLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, [recipeSearch, id]);

  useEffect(() => {
    let filteredRecipes = [];
    for (let i = 0; i < filterCategories.length; i++) {
      let filterAllCategories = recipes.filter(
        (recipe) => recipe.strArea === filterCategories[i]
      );
      filterAllCategories.length && filteredRecipes.push(filterAllCategories.flat());
    }
    setCopyRecipes(filteredRecipes.flat())
  }, [filterCategories]);

  return (
    <>
      <RecipesContainer>
        {loading && <h1>Loading...</h1>}
        {!recipes && <h1>Can't find any recipes for {recipeSearch}</h1>}
        {!id && !loading && recipes && (
          <h1>Search result for {recipeSearch}</h1>
        )}
        {id && !loading && <h1>{id}</h1>}

        {recipes && !loading && (
          <>
            {!id && <Filter setFilterCategories={setFilterCategories} />}
            <RecipesItemsContainer>
              {copyRecipes.map((recipe) => {
                return <RecipeBox key={recipe.idMeal} {...recipe} />;
              })}
            </RecipesItemsContainer>{' '}
          </>
        )}
      </RecipesContainer>
    </>
  );
};

export default GetRecipes;
