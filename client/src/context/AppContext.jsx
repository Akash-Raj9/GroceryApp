import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


export const AppContext = createContext();


export const AppContextProvider = ({children})=>{

    const currency = import.meta.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user,setUser] = useState(false);
    const [isSeller,setIsSeller] = useState(false);
    const [showUserlogin,setShowUserLogin] = useState(false);
    const [products,setProducts] = useState([]);
    const [cartItems,setCartItems] = useState({})

    const fetchProducts = async()=>{
        setProducts(dummyProducts)
    }
    const addToCart = ()=>{
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

    //update cart item quantity
    // 1:38:25

    
    useEffect(()=>{
        fetchProducts()
    },[])

    const value = {navigate,user,setUser,isSeller,setIsSeller,showUserlogin,setShowUserLogin,products,currency,addToCart}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


export const useAppContext = ()=>{
    return useContext(AppContext);
}
