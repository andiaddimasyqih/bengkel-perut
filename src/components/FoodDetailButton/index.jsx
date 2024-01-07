'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function FoodDetailButton({ id, price, quantity, name }) {
  const router = useRouter();
  const [quantityState, setQuantityState] = useState(quantity || 1);

  const handleAddToCart = async () => {
    const response = await fetch('/api/v1/order', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 'clqg99k2b0000c5xb3iphxjzs',
        food_id: id,
        quantity: quantityState,
      }),
    });
    if (response.ok) {
      toast(
        () => (
          <span>
            <strong>{name}</strong> berhasil ditambahkan
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
      toast.error('Gagal menambahkan menu');
    }
    router.refresh();
  };

  const handleDeleteOrder = async () => {
    const response = await fetch('/api/v1/order', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 'clqg99k2b0000c5xb3iphxjzs',
        food_id: id,
      }),
    });
    const { status } = await response.json();
    if (status === 200) {
      toast(
        () => (
          <span>
            <strong>{name}</strong> berhasil dihapus
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
      toast.error('Terjadi kesalahan!');
    }
    router.refresh();
  };

  const handleIncrease = () => {
    setQuantityState((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantityState > 0) {
      setQuantityState((prev) => prev - 1);
    }
  };

  return (
    <div className='bg-[#BE100F] mt-5 rounded-2xl flex w-fit items-center gap-5 px-5'>
      <p className='text-white font-semibold text-2xl min-w-44'>
        IDR {new Intl.NumberFormat().format(quantityState !== 0 ? price * quantityState : price)}
      </p>
      <div className='flex text-white border-white border-2 items-center my-5 py-2 rounded-lg px-5 gap-4 font-black select-none text-xl'>
        <button
          type='button'
          onClick={handleDecrease}
          className='hover:text-[#FFC727] transition-all duration-200'
        >
          -
        </button>
        <p className='min-w-10 text-center'>{quantityState}</p>
        <button
          type='button'
          onClick={handleIncrease}
          className='hover:text-[#FFC727] transition-all duration-200'
        >
          +
        </button>
      </div>
      <button
        className='font-black bg-black text-white rounded-xl py-2 px-5 ml-5 text-xl'
        onClick={quantityState === 0 ? handleDeleteOrder : handleAddToCart}
      >
        <span>CONFIRM</span>
      </button>
    </div>
  );
}
