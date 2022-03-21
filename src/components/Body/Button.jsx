import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Button=()=>{
    const {handlechange}=useContext(CartContext)
    return(
        <button onClick={()=>{
            handlechange(1)
        }

           

        


        }>Add to cart</button>
    )
}