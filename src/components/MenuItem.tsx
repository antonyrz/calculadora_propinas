import type { MenuItem } from "../types"

type MenuItemProps = {
    item : MenuItem,
};

export default function MenuItem({item} : MenuItemProps) {

  return (
    <button className="cursor-pointer border-2 border-teal-400 w-full hover:bg-teal-200 p-3 flex justify-between">
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
    </button>
  )
}
