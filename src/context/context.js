import {createContext, useState, useEffect} from 'react'

import { fetchCart, fetchProducts } from '../api/fetch-data';

export const DataContext = createContext();

const DataContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [loading, setLoading] = useState(true);
        
    /* Api Request */
    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });

        fetchCart()
            .then((data) => {
                setCart(data);
                setLoading(false);
            })
    }, []);
        
    return (
        <DataContext.Provider value={{cart, products, loading, setCart, setProducts}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;

