import Link from "next/link";

export default function FoodOrder({ foodId, name, price, quantity, image }) {
  return (
    <Link href={`/bengkel-perut/menu/${foodId}`}>
      <div className='flex items-center relative'>
        <div className='flex items-center gap-3'>
          <div
            className='rounded-3xl w-20 h-20 bg-cover bg-center'
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
          <p className='font-semibold text-lg'>X {quantity}</p>
        </div>
        <p className='font-semibold text-xl absolute left-1/2'>{name}</p>
      </div>
      <p className='font-semibold text-lg mt-2'>IDR {new Intl.NumberFormat().format(price * quantity)}</p>
    </Link>
  );
}
