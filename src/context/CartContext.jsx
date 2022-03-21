import { createContext,useState } from "react";


export const CartContext=createContext();


export const CartContextProvider=({children})=>{


    const [cartr,addcart]=useState(0)
    const handlechange=(value)=>{
        addcart(cartr+value)
        
    }

    return(
        <CartContext.Provider value={{cartr,handlechange}}>
{children}

        </CartContext.Provider>
    )
}


