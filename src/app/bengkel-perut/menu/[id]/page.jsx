import FoodDetailButton from '@/components/FoodDetailButton';
import prisma from '@/libs/prisma';

export default async function Page({ params }) {
  const food = await prisma.foods.findUnique({
    include: {
      orders: true,
    },
    where: {
      id: params.id,
    },
  });

  return (
    <div className='h-dvh flex justify-center items-center gap-16'>
      <div
        className='w-2/6 h-72 rounded-2xl shadow-search bg-cover bg-center'
        style={{ backgroundImage: `url("${food.img}")` }}
      ></div>
      <div className='w-3/6'>
        <div>
          <h2 className='font-semibold text-4xl'>{food.name}</h2>
          <p className='text-xl mt-3'>{food.description}</p>
        </div>
        <FoodDetailButton id={food.id} price={food.price} quantity={food.orders[0]?.quantity || 1} name={food.name} />
      </div>
    </div>
  );
}
