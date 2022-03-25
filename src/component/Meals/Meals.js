import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals)

            )
    }, [])

    const handleAddToCart = (foods) => {
        const newCart = [...cart, foods];
        setCart(newCart);

    }


    return (
        <div className='meals-parent'>
            <div className='meals'>
                {
                    foods.map(food => <Meal key={food.idMeal} food={food}
                        handleAddToCart={handleAddToCart}
                    ></Meal>)
                }
            </div>
            <div className='cart-container'>
                <h3>Order Your Favourite Food</h3>
                {
                    <Cart cart={cart}></Cart>
                }
            </div>

        </div>
    );
};

export default Meals;