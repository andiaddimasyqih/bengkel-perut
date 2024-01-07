'use client';

import Link from 'next/link';
import FoodCardButton from '../FoodCardButton';

export default function FoodCardItem({ id, name, price, img }) {
  return (
    <div className='py-10'>
      <div className='relative w-full mx-auto'>
        <Link href={`/bengkel-perut/menu/${id}`}>
          <div
            className='w-full h-48 rounded-2xl shadow-search bg-cover'
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
        </Link>
        <div className='bg-[#BE100F] text-white font-semibold px-5 rounded-b-2xl pt-10 pb-2 absolute w-full -bottom-16 -z-10'>
          <div>
            <h1>{name}</h1>
            <p>IDR {new Intl.NumberFormat().format(price)}</p>
          </div>
        </div>
        <div className='absolute right-4 -bottom-14'>
          <FoodCardButton id={id} name={name} />
        </div>
      </div>
    </div>
  );
}
