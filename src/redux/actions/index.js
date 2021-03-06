import fetchDrinks from '../../services/drinksApi';
import fetchFoods from '../../services/foodsApi';
import nationalityApi from '../../services/nationalityApi';
import recipesNationalityApi from '../../services/recipesNationalityApi';

export const setFoodRecipes = (recipes) => ({ type: 'SET_FOOD_RECIPES', recipes });
export const setDrinksRecipes = (recipes) => ({ type: 'SET_DRINK_RECIPES', recipes });

export function fetchRecipes(type, value, page) {
  const displayAlert = () => {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  };

  return async (dispatch) => {
    if (page !== 'Foods') {
      if (type === 'ingredient') {
        const searchIngredient = await fetchDrinks('ingredient-search-radio', value);
        dispatch(setDrinksRecipes(searchIngredient));
        return;
      }
      const recipes = await fetchDrinks(type, value);
      if (recipes.drinks === null) displayAlert();
      dispatch(setDrinksRecipes(recipes));
      return;
    }
    if (type === 'ingredient') {
      const searchIngredient = await fetchFoods('ingredient-search-radio', value);
      dispatch(setFoodRecipes(searchIngredient));
      return;
    }
    const recipes = await fetchFoods(type, value);
    if (recipes.meals === null) displayAlert();
    dispatch(setFoodRecipes(recipes));
  };
}

export const setNationality = (nationality) => ({
  type: 'SET_NATIONALITY', nationality: nationality.meals });
export const ERROR = (error) => ({ type: 'ERROR', error });

export function fetchAPINationality() {
  return async (dispatch) => {
    try {
      const response = await nationalityApi();
      dispatch(setNationality(response));
    } catch (error) {
      return error;
    }
  };
}

export const recipesNationality = (recipes) => ({
  type: 'SET_NATIONALITY_RECIPES', recipes: recipes.meals });
export const ERROR_NATIONALITY = (error) => ({ type: 'ERROR', error });

export function fetchApiNationalityRecipes(country) {
  return async (dispatch) => {
    try {
      const response = await recipesNationalityApi(country);
      dispatch(recipesNationality(response));
    } catch (error) {
      return error;
    }
  };
}
export const setFavoriteRecipe = (payload) => ({ type: 'SET_FAVORITE', payload });

export const removeFavoriteRecipe = (payload) => ({
  type: 'REMOVE_FAVORITE',
  payload,
});

export const saveProgress = (type, id, ingredientsList) => ({
  type: 'SAVE_PROGRESS',
  payload: { type, id, ingredientsList },
});

export const setRecipeDone = (doneObj) => ({
  type: 'SET_RECIPE_DONE',
  payload: doneObj,
});

export const setFoodSearchIngredient = (value) => ({
  type: 'SET_INGREDIENT_FOODS',
  value,
});

export const setDrinkSearchIngredient = (value) => ({
  type: 'SET_INGREDIENT_DRINKS',
  value,
});

export const setRedirectStatus = (payload) => ({
  type: 'SET_REDIRECT_STATUS',
  payload,
});

export const setDarkMode = () => ({
  type: 'SET_DARK_MODE',
});
