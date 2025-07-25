import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type tipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
};

export default function TipPercentageForm({setTip, tip} : tipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>

        <form action="">
            {tipOptions.map(tipOption => (
                
            <div key={tipOption.id} className="flex gap-3 py-2">
                <label htmlFor={tipOption.id}>{tipOption.label}</label>
                <input 
                    id={tipOption.id}
                    type="radio" 
                    name="tip"
                    value={tipOption.value}
                    onChange={e => setTip(+e.target.value)}
                    checked={tipOption.value === tip}
                />
            </div>
            ))}
        </form>
    </div>
  )
}
