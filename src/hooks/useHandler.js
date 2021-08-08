import { useContext } from "react"

import { DataContext } from "../context/context";
import { commerce } from "../lib/commerce"

const useHandler = () => {
    const {setCart} = useContext(DataContext);

    return {
        async handleAddToCart(productId, quantity) {
            setCart((await commerce.cart.add(productId, quantity)).cart);
        },

        async handleUpdateCartQty(lineItemId, quantity) {
            setCart((await commerce.cart.update(lineItemId, {quantity})).cart);
        },

        async handleRemoveFromCart(lineItemId) {
            setCart((await commerce.cart.remove(lineItemId)).cart);
        },

        async handleEmptyCart() {
            setCart((await commerce.cart.empty()).cart);
        }
    }
}

export default useHandler
