'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiSolidCartAlt, BiSolidDish, BiSolidHome } from 'react-icons/bi';
import { IoPersonCircle } from 'react-icons/io5';

export default function Aside() {
  const pathname = usePathname();
  const [mode, setMode] = useState('guest');

  useEffect(() => {
    const fetchModeData = async () => {
      try {
        const response = await fetch('/api/v1/mode');
        const data = await response.json();
        setMode(data.modes[0].name);
      } catch (error) {
        console.error('Error fetching mode data:', error);
      }
    };

    fetchModeData();
  }, []);

  return (
    <aside className='fixed'>
      <div className='h-screen py-5'>
        <div className='flex flex-col items-center bg-[#EBEBEB] px-4 py-3 rounded-r-3xl h-full shadow-bengkel'>
          <Link href={'/'}>
            <Image src={'/assets/img/logo.svg'} alt='food menu' width={75} height={75} />
          </Link>
          <div className='flex flex-col gap-14 mt-20'>
            <Link
              href={'/bengkel-perut'}
              className={`flex flex-col justify-center items-center px-3 py-2 rounded-2xl font-medium text-sm ${
                pathname === '/bengkel-perut' && 'bg-red-300 text-[#BE100F]'
              }`}
            >
              <BiSolidHome size={30} />
              <p>Home</p>
            </Link>
            <Link
              href={'/bengkel-perut/menu'}
              className={`flex flex-col justify-center items-center px-3 py-2 rounded-2xl font-medium text-sm ${
                pathname === '/bengkel-perut/menu' && 'bg-red-300 text-[#BE100F]'
              }`}
            >
              <BiSolidDish size={30} />
              <p>Menu</p>
            </Link>
            <Link
              href={'/bengkel-perut/order'}
              className={`flex flex-col justify-center items-center px-3 py-2 rounded-2xl font-medium text-sm ${
                pathname === '/bengkel-perut/order' && 'bg-red-300 text-[#BE100F]'
              }`}
            >
              <BiSolidCartAlt size={30} />
              <p>Order</p>
            </Link>
          </div>
          {mode !== 'guest' && (
            <Link
              href={'/bengkel-perut/profile'}
              className={`flex flex-col justify-center items-center px-3 py-2 rounded-2xl font-medium text-sm mt-auto ${
                pathname === '/bengkel-perut/profile' && 'bg-red-300 text-[#BE100F]'
              }`}
            >
              <IoPersonCircle size={40} />
              <p>Profile</p>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
