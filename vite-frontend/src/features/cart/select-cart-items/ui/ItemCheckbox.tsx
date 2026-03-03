import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { selectIsSelected } from "../model/selectors";
import { toggleSelect } from "../model/selectionSlice";
import type { CartItemId } from "../model/types";

export const ItemCheckbox = ({ cartItemId }: CartItemId) => {
  const dispatch = useAppDispatch();
  const isSelected = useAppSelector(selectIsSelected(cartItemId));
  
  return (
    <>
      <input 
        type="checkbox"
        checked={isSelected}
        onChange={() => dispatch(toggleSelect(cartItemId))}
        className="mx-5 p-2 w-3 h-3
          appearance-none border border-zinc-400 rounded
          checked:[background-image:url('../../app/assets/icons/check.svg')]
          bg-size-[10px] bg-center bg-no-repeat"
      />
    </>
  )
}