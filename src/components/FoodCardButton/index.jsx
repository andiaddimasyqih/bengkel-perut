'use client';

import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { CiCirclePlus } from 'react-icons/ci';

export default function FoodCardButton({ id, name }) {
  const router = useRouter();
  const pathname = usePathname();

  // Menambahkan menu pesanan ke dalam database
  const handleAddToCart = async (event) => {
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
      toast(() => (
        <span>
          <strong>{name}</strong> berhasil ditambahkan
        </span>
      ), {
        icon: '✅',
        style: {
          border: '1px solid #22c55e'
        }
      })
      if (pathname === '/bengkel-perut/menu') {
        router.push('/bengkel-perut/order');
      }
      router.refresh();
    } else {
      toast.error('Gagal menambahkan menu');
    }
  };

  return (
    <button type='button' className='text-white' onClick={handleAddToCart}>
      <CiCirclePlus size={32} />
    </button>
  );
}
