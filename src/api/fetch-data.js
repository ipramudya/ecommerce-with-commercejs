import { commerce } from "../lib/commerce";

export const fetchProducts = async () => {
    return (await commerce.products.list()).data;
};

export const fetchCart = async () => {
    return await commerce.cart.retrieve();
};