import type { MenuItem } from "../types"

type MenuItemProps = {
    item : MenuItem,
    addItem: (item: MenuItem) => void;
};

export default function MenuItem({item, addItem} : MenuItemProps) {

  return (
    <button id={`${item.id}`} 
    className="cursor-pointer border-2 border-teal-400 w-full hover:bg-teal-200 p-3 flex justify-between"
    onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
    </button>
  )
}
