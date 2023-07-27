import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
    cartTotalAmount : 0,
};

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers:{
//         addToCart(state, action) {
//             state.cartItem.push(action.payload);
//         },
//     }
// })

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action) {
            const itemIndex = state.cartItem.findIndex(
                (item) => item.courseId === action.payload.courseId
            );
            if (itemIndex >= 0 ) {
                toast.info(` ${action.payload.name} already in cart`, {
                    position: "bottom-left",
                })
            } else{
                let tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItem.push(tempProduct);
                toast.success(`added ${action.payload.name} course to cart`, {
                    position: "bottom-left",
                })
            }

            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));

        },

        removeFromCart(state, action) {
            const nextCartItem = state.cartItem.filter(
                (item) => item.courseId !== action.payload.courseId
            );
            
            state.cartItem = nextCartItem;
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));

            toast.error(`${action.payload.name} removed from cart`, {
                position: "bottom-left",
            })
        },

        clearCart(state,action){
            state.cartItem = [];
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));

            toast.error(`Cart Cleared!`, {
                position: "bottom-left",
            })
        },

        getTotals(state, action){
            let {total} = state.cartItem.reduce(
                (cartTotal, item) => {
                    const {price} = item;
                    const itemTotal = price;

                    cartTotal.total += itemTotal;
                    return cartTotal;
                },
                {
                total:0
                }
            );

            state.cartTotalAmount = total;
        }
    }
})

export const { addToCart,removeFromCart,clearCart,getTotals } = cartSlice.actions;

export default cartSlice.reducer