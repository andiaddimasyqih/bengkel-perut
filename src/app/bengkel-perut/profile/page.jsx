'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { CgLogOut } from 'react-icons/cg';

export default function Page() {
  const [user, setUser] = useState(null);
  const [mark, setMark] = useState(true);
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;

    if (!name) {
      toast.error('Mohon untuk mengisi nama anda!');
      return;
    }

    const response = await fetch('/api/v1/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: 'clqg99k2b0000c5xb3iphxjzs', name, address, phone, email }),
    });

    const responseJson = await response.json();

    if (responseJson.status === 200) {
      router.refresh();
      toast.success('Profil berhasil diperbarui!');
    } else {
      toast.error(responseJson.message);
    }
  };

  const handleCancel = () => {
    setMark((prevMark) => !prevMark);
    router.refresh();
  };

  const handleLogout = async () => {
    const response = await fetch('/api/v1/mode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'guest' }),
    });

    const responseJson = await response.json();

    if (responseJson.status === 200) {
      router.push('/');
    }
  }

  useEffect(() => {
    const fetchModeData = async () => {
      try {
        const response = await fetch('/api/v1/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: 'clqg99k2b0000c5xb3iphxjzs' }),
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching mode data:', error);
      }
    };

    fetchModeData();
  }, [mark]);

  return (
    <div className='py-16'>
      <h3 className='text-center font-semibold text-[#BE100F] text-3xl'>Change Profile</h3>
      <div className='max-w-4xl mx-auto bg-[#EBEBEB] py-14 px-32 mt-10 rounded-t-3xl rounded-br-3xl shadow-search border border-[#BE100F] flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <label className='font-bold text-[#BE100F] ml-5 text-xl' htmlFor='name'>
            Nama
          </label>
          <input
            className='rounded-2xl px-5 py-2 border border-[#BE100F] placeholder:italic placeholder:font-semibold placeholder:text-[#C7CBE5]'
            type='text'
            name='name'
            id='name'
            placeholder='ketik nama'
            value={user?.name || ''}
            onChange={handleInputChange}
            ref={nameRef}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-bold text-[#BE100F] ml-5 text-xl' htmlFor='address'>
            Alamat
          </label>
          <input
            className='rounded-2xl px-5 py-2 border border-[#BE100F] placeholder:italic placeholder:font-semibold placeholder:text-[#C7CBE5]'
            type='text'
            name='address'
            id='address'
            placeholder='ketik alamat'
            value={user?.address || ''}
            onChange={handleInputChange}
            ref={addressRef}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-bold text-[#BE100F] ml-5 text-xl' htmlFor='phone'>
            No. HP
          </label>
          <input
            className='rounded-2xl px-5 py-2 border border-[#BE100F] placeholder:italic placeholder:font-semibold placeholder:text-[#C7CBE5]'
            type='text'
            name='phone'
            id='phone'
            placeholder='+62'
            value={user?.phone || ''}
            onChange={handleInputChange}
            ref={phoneRef}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-bold text-[#BE100F] ml-5 text-xl placeholder:font-semibold' htmlFor='email'>
            Email
          </label>
          <input
            className='rounded-2xl px-5 py-2 border border-[#BE100F] placeholder:italic placeholder:font-bold placeholder:text-[#C7CBE5]'
            type='email'
            name='email'
            id='email'
            placeholder='ketik email'
            value={user?.email || ''}
            onChange={handleInputChange}
            ref={emailRef}
          />
        </div>
      </div>
      <div className='max-w-4xl mx-auto mt-8'>
        <div className='flex justify-between pr-5 gap-8'>
          <button className='flex items-center pl-5 gap-1 text-[#BE100F] font-medium' onClick={handleLogout}>
            <CgLogOut size={20} />
            Logout
          </button>
          <div className='flex gap-5'>
            <button className='text-[#BE100F] font-bold' onClick={handleCancel}>
              Batal
            </button>
            <button className='text-white bg-[#BE100F] p-3 font-bold rounded-md' onClick={handleSubmit}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
