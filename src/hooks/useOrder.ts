import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]);

    function addItem(item : MenuItem){

        const itemExists = order.findIndex(e => e.id === item.id);

        if(itemExists >= 0){

            // Ya existe
            const orderUpdate = [...order];
            orderUpdate[itemExists].quantity++;
            setOrder(orderUpdate);
        }else{

            // No existe
            const newItem : OrderItem = {...item, quantity : 1}
            setOrder([...order, newItem]);            
        };
    };
    
    console.log(order);
    return{
        addItem
    }   
}