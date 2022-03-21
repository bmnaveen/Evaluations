import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart=()=>{
    const {cartr}=useContext(CartContext)
    return(
        <nav>
            <h1>
No.of items{cartr}
            </h1>
        </nav>
    )
}