import type { OrderItem } from "../types";
import {formatCurrency} from '../helpers'
import { useMemo } from "react";

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void,
};

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order]);

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, subTotalAmount]);

  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tipAmount, subTotalAmount])

    return (

      <>
        <div className="space-y-3">
          <h2 className="font-black text-2xl">Totales y Propina: </h2>
          <p>Subtotal a pagar: {''}
              <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
          </p>

          <p>Propina: {''}
              <span className="font-bold">{formatCurrency(tipAmount)}</span>
          </p>

          <p>Total a pagar: {''}
              <span className="font-bold">{formatCurrency(totalAmount)}</span>
          </p>
        </div>

        <button 
        className="cursor-pointer w-full bg-black p-3 uppercase text-white font-bold disabled:opacity-10 disabled:cursor-auto"
        disabled={totalAmount === 0}
        onClick={placeOrder}
        >
          Guardar Orden
        </button>
      </>

  )
}
