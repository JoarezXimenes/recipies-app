import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/actions';

function SearchBar({ pageTitle }) {
  const [searchType, setSearchType] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const checkFirstLetter = () => (
    searchValue.length > 1
      ? global.alert('Your search must have only 1 (one) character')
      : dispatch(fetchRecipes(searchType, searchValue, pageTitle)));

  const searchClick = () => (
    searchType !== 'first-letter-search-radio'
      ? dispatch(fetchRecipes(searchType, searchValue, pageTitle))
      : checkFirstLetter());

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        onChange={ ({ target }) => setSearchValue(target.value) }
      />
      <div>
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            name="searchRadio"
            id="ingredient-search-radio"
            data-testid="ingredient-search-radio"
            onClick={ ({ target }) => setSearchType(target.id) }
          />
          Ingredient
        </label>

        <label htmlFor="name-search-radio">
          <input
            type="radio"
            name="searchRadio"
            id="name-search-radio"
            data-testid="name-search-radio"
            onClick={ ({ target }) => setSearchType(target.id) }
          />
          Name
        </label>

        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            name="searchRadio"
            id="first-letter-search-radio"
            data-testid="first-letter-search-radio"
            onClick={ ({ target }) => setSearchType(target.id) }
          />
          First Letter
        </label>

        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ searchClick }
        >
          Search
        </button>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  fetchRecipes: PropTypes.func,
}.isRequired;

export default SearchBar;
