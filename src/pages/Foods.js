import PropTypes from 'prop-types';
import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';

function Foods({ history }) {
  const foods = useSelector((state) => state.foods.recipes.meals);

  useEffect(() => {
    if (!foods) return;
    const firstMealId = foods[0].idMeal;
    if (foods.length === 1) history.push(`/foods/${firstMealId}`);
  }, [foods, history]);

  return (
    <div>
      <Header
        displaySearch
        pageTitle="Foods"
      />
      {
        foods && foods.map((meal, index) => {
          const max = 11;
          if (index > max) return null;
          return (<Card
            key={ meal.strMeal }
            img={ meal.strMealThumb }
            index={ index }
            title={ meal.strMeal }
          />);
        })
      }
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Foods;
