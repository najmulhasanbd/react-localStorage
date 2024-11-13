/* eslint-disable react/prop-types */
import React from 'react'
import '../Bottol/Bottol.css'

const Bottol = ({ bottol, handleAddToCart }) => {

    const { name, seller, price, img, stock } = bottol

    return (
        <div className='singleBottom'>
            <img src={img} alt={`${name}`} />
            <h4>Name: {name}</h4>
            <p>Seller Name: {seller}</p>
            <p>Price: {price}</p>
            <p>Stock: {stock}</p>
            <button onClick={() => handleAddToCart(bottol)}>Purchase</button>
        </div>
    )
}

export default Bottol
