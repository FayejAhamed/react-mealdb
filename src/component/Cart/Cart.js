import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)

    // let total = []
    // for (const food of cart) {
    //     total = total + "," + food;
    //     // console.log(food)
    // }

    return (
        <div >
            <h4>Order: {cart.length}</h4>

            {
                cart.map(items => <h4>Foods: {items}</h4>)
            }
            {/* <h1>Hello {total}</h1> */}

        </div>
    );
};

export default Cart;