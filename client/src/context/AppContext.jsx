import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import {toast} from 'react-toastify';

export const AppContext = createContext();


export const AppContextProvider = ({children})=>{

    const currency = import.meta.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user,setUser] = useState(false);
    const [isSeller,setIsSeller] = useState(false);
    const [showUserLogin,setShowUserLogin] = useState(false);
    const [products,setProducts] = useState([]);
    const [cartItems,setCartItems] = useState({});
    const[searchQuery,setSearchQuery] = useState("");

    const fetchProducts = async()=>{
        setProducts(dummyProducts)
    }
    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId]+=1;
        }
        else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("item added to cart");
    }

    
    const updateCartItem = (itemId,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("item updated");
    }
    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -=1;
            if(cartData[itemId]===0){
                delete cartData[itemId];
            }
        }
        toast.success("item removed from cart");
        setCartItems(cartData);

    }

    const getCartCount = ()=>{
        let count = 0;
        for(const item in cartItems){
            count += cartItems[item];
        }
        return count;
    }

    const getCartAmount = () =>{
        let amount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id===items);
            if(cartItems[items]>0){
                amount+=itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(amount*100)/100;
    }
    
    useEffect(()=>{
        fetchProducts()
    },[])

    const value = {navigate,user,setUser,isSeller,setIsSeller,showUserLogin,
                    setShowUserLogin,products,currency,addToCart,updateCartItem,removeFromCart,
                    cartItems,searchQuery,setSearchQuery,getCartAmount,getCartCount}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


export const useAppContext = ()=>{
    return useContext(AppContext);
}
