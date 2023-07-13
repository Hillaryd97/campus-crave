import { fetchCaf,fetchCart } from "../utils/fetchLocalStorageData";

const cafInfo = fetchCaf();
const cartInfo = fetchCart();

export const initialState = {

    cafItems: cafInfo,
    cartItems: cartInfo

}