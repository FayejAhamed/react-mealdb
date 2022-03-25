import React from 'react';
import './Meal.css';

const Meal = (props) => {
    // console.log(props.food);
    const { strMealThumb, strMeal, idMeal, strArea, strInstructions, strTags } = props.food;
    const { handleAddToCart } = props
    return (
        <div className='meal-item'>
            <img src={strMealThumb} alt="" />
            <h3>Food Name: {strMeal}</h3>
            <p> orgin: {strArea}</p>
            <p><small>{strTags}</small></p>
            <button onClick={() => handleAddToCart(strMeal)} className='food-btn'>Order Now</button>
        </div>
    );
};

export default Meal;