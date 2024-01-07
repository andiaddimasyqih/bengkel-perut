import FoodCardItem from '@/components/FoodCardItem';
import prisma from '@/libs/prisma';

export default async function Page() {
  const foods = await prisma.foods.findMany();

  return (
    <div className='grid grid-cols-3 pt-8 pb-40 gap-5'>
      {foods.map((food) => (
        <FoodCardItem key={food.name} {...food} />
      ))}
    </div>
  );
}
