import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type orderContentsProps = {
    order: OrderItem[],
    removeItem: (id : OrderItem['id']) => void
};

export default function OrderContents({order, removeItem} : orderContentsProps){

    return(
        <>
            <div>
                <h2 className="font-black text-4xl">Consumo</h2>

                <div className="space-y-3 mt-10">
                    {order.length === 0 
                    ? <p>La orden está vacia</p>
                    : (
                        order.map(item => (
                            <div 
                                key={item.id} 
                                className="flex items-center justify-between py-5 border-t border-gray-200 last-of-type:border-b"
                            >
                                <div>
                                    <p className="text-lg">
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>

                                    <p className="font-black">
                                        Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                                    </p>
                                </div>

                                <div>
                                    <button 
                                    className="bg-red-600 text-white h-8 w-8 rounded-full font-black cursor-pointer"
                                    onClick={() => removeItem(item.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                            
                        ))
                    )}
                </div>
            </div>
        </>
    );
};