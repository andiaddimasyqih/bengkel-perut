import FoodCardItem from '@/components/FoodCardItem';
import FoodOrder from '@/components/FoodOrder';
import prisma from '@/libs/prisma';
import Link from 'next/link';

export default async function Page() {
  const foods = await prisma.foods.findMany();
  const orders = await prisma.orders.findMany({
    include: {
      food: true,
    },
  });

  const totalPrice = orders.reduce((accumulator, item) => {
    const { quantity, food } = item;
    const { price } = food;
    return accumulator + quantity * price;
  }, 0);

  return (
    <div className=''>
      <div className='max-w-3xl ml-10'>
        <div className='grid grid-cols-2 pt-8 pb-40 gap-5'>
          {foods.map((food) => (
            <FoodCardItem key={food.name} {...food} />
          ))}
        </div>
      </div>
      <div className='fixed top-0 bottom-0 right-0 border-l-2 border-red-600 min-w-[33%] bg-[#F8F8F8] min-h-dvh px-9 pt-24 overflow-y-scroll'>
        <h3 className='font-semibold text-3xl'>My Order</h3>
        <div className='mt-5 flex flex-col gap-7'>
          {orders.map((order) => (
            <FoodOrder
              key={order.id}
              foodId={order.food_id}
              name={order.food.name}
              price={order.food.price}
              quantity={order.quantity}
              image={order.food.img}
            />
          ))}
        </div>
        <div className='my-10 flex flex-col justify-center'>
          <div className='flex gap-5 items-center border-t-black/45 border-t'>
            <div className='flex items-center gap-4 mt-5 ml-auto px-7'>
              <p className='text-3xl'>Total</p>
              <p className='font-semibold text-xl'>IDR {new Intl.NumberFormat().format(totalPrice)}</p>
            </div>
          </div>
          <div className='flex justify-center mt-7 px-7'>
            <Link href={'/bengkel-perut/order/pay'} className='bg-[#BE100F] text-center text-white font-semibold text-lg w-full py-2 rounded-lg'>Submit Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
