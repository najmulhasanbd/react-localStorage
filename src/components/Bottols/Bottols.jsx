import { useEffect, useState } from 'react'
import Bottol from '../Bottol/Bottol'
import "../Bottols/Bottols.css"
import { addToLS, getStoredCart, removeFromLS } from '../../utilities/localstroage'
import Cart from '../Cart/Cart';

const Bottols = () => {
    const [bottol, setBottol] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottol.json')
            .then(res => res.json())
            .then(data => setBottol(data));
    }, []);

    useEffect(() => {
        if (bottol.length) {
            const storedCart = getStoredCart();
            const savedCart = [];

            for (const id of storedCart) {
                const bottolItem = bottol.find(bottol => bottol.id === id);
                if (bottolItem) {
                    savedCart.push(bottolItem);
                }
            }
            console.log('saved cart', savedCart);
            setCart(savedCart); 
        }
    }, [bottol]);

    const handleAddToCart = (bottol) => {
        const newCart = [...cart, bottol]; 
        setCart(newCart); 
        addToLS(bottol.id); 
    };

    const handleRemoveCartFromLS = id =>{
        const remainingCart = cart.filter(bottol => bottol.id !==id);
        setCart(remainingCart)
        removeFromLS(id)
    }

    return (
        <div>
            <Cart handleRemoveCartFromLS={handleRemoveCartFromLS} cart={cart} />
            <div className="bottol_container">
                {bottol.map(bottol => (
                    <Bottol
                        key={bottol.id}
                        handleAddToCart={() => handleAddToCart(bottol)}
                        bottol={bottol}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottols;
