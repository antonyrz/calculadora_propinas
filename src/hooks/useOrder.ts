import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    function addItem(item : MenuItem){

        const itemExists = order.find(orderItem => orderItem.id === item.id);

        if(itemExists){

            // Ya existe
            const orderUpdate = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1 } : orderItem);
    
            setOrder(orderUpdate);
        }else{
            // No existe
            const newItem : OrderItem = {...item, quantity : 1}
            setOrder([...order, newItem]);            
        };
    };

    function removeItem(id : OrderItem['id']){
        setOrder(order.filter(item => item.id !== id));
    };

    function placeOrder(){
        setOrder([]);
        setTip(0);
    };   

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    };   
}