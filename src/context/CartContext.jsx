import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./cartreducer";
import { toast } from "react-toastify";

const CartContext = createContext()


const CartProvider = ({ children }) => {
    const initialState = { items: [] }
    const [cart, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (produit) => {
        dispatch({ type: "ADD", payload: produit });
        toast.success("Article ajouté au panier ");
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE", payload: { id } })
    };

    const increaseQnt = (id) => {
        dispatch({ type: "INCREASE", payload: { id } })
    };

    const decreaseQnt = (id) => {
        dispatch({ type: "DECREASE", payload: { id } })
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR" });
        toast.error("le panier est cleare !")
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            increaseQnt,
            decreaseQnt,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider


export const useCart = () => useContext(CartContext)
