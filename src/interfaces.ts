export interface ICategories {
  idCategory: string;
  strCategory: string;
  strCategoryDescription?: string;
  strCategoryThumb: string;
}

export interface IRecipes {
  strMealThumb: string;
  strMeal: string;
  idMeal: string;
  strArea: string;
}

export interface IRecipe {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
}

export interface IIngredients {
  ingredient: string | number;
  measure: string;
}

export interface INavBar {
  setRecipeSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface IFilter {
  setFilterCategories(filter: string[]): void;
}
