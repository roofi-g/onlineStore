import { useUpdateQuantity } from '../model/useUpdateQuantity';

type UpdateQuantityProps = {
  cartItemId: string;
  cartItemQty: number;
}

export const UpdateQuantity = ({ cartItemId, cartItemQty }: UpdateQuantityProps) => {
  const { decrease, increase, isLoading } = useUpdateQuantity(cartItemId, cartItemQty);

  return (
    <>
      <button onClick={decrease} disabled={isLoading} className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-300/20">
        <svg className="w-6 text-zinc-400" viewBox="0 0 24 24">
          <path d="M17 10.9997H7C6.44772 10.9997 6 11.4474 6 11.9997C6 12.552 6.44772 12.9997 7 12.9997H17C17.5523 12.9997 18 12.552 18 11.9997C18 11.4474 17.5523 10.9997 17 10.9997Z" fill="currentColor"/>
        </svg>
      </button>

      <p>{ cartItemQty }</p>

      <button onClick={increase} disabled={isLoading} className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-300/20">
        <svg className="w-6 text-zinc-400" viewBox="0 0 24 24">
          <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="currentColor"/>
        </svg>
      </button>
    </>
  )
}