'use client';

import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function FoodItem({ imageUrl, backgroundColor, title, id }) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePostOrder = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/v1/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 'clqg99k2b0000c5xb3iphxjzs',
        food_id: id,
        quantity: 1,
      }),
    });

    if (response.ok) {
      toast(
        () => (
          <span>
            <strong>{title}</strong> berhasil ditambahkan
          </span>
        ),
        {
          icon: '✅',
          style: {
            border: '1px solid #22c55e',
          },
        },
      );
      router.push('/bengkel-perut/order');
    } else {
      toast(
        () => (
          <span>
            <strong>{title}</strong> gagal ditambahkan
          </span>
        ),
        {
          icon: '❌',
          style: {
            border: '1px solid #ef4444',
          },
        },
      );
    }
  };

  return (
    <div className='relative'>
      <div
        className={`rounded-tr-[105px] rounded-l-3xl w-[250px] h-[310px] bg-cover`}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div
        className={`absolute -bottom-2 -right-8 text-white w-52 text-center flex flex-col items-center gap-1 py-2 rounded-tr-full rounded-bl-full `}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <p className='font-medium'>{title}</p>
        <button className='bg-[#FFC727] rounded-xl px-5 w-fit text-xs' onClick={handlePostOrder}>
          Order Now
        </button>
      </div>
    </div>
  );
}
