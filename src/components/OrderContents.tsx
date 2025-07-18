import type { OrderItem } from "../types";

type orderContentsProps = {
    order: OrderItem[]
};

export default function OrderContents({order} : orderContentsProps){

    return(
        <>
            <div>
                <h2 className="font-black text-4xl">Consumo</h2>

                <div className="space-y-3 mt-5">
                    {order.length === 0 
                    ? <p>La orden está vacia</p>
                    : (
                        order.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-2 border-t-2 border-gray-200">
                                <div>
                                    <p>{item.name} - {item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Total: {item.quantity * item.price}</p>
                                </div>

                                <div>
                                    <button className="bg-red-600 text-white h-8 w-8 rounded-4xl font-bold cursor-pointer">
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