'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { RiLoader4Line } from 'react-icons/ri';

export default function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      toast.error('username dan password harus diisi!');
      setIsLoading(false);
      return;
    }

    const response = await fetch('/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        password,
      }),
    });

    const responseJson = await response.json();
    if (responseJson.status === 200) {
      toast(() => (
        <span>
          Login success, Welcome <strong>{responseJson.data}</strong>
        </span>
      ));
      router.push('/bengkel-perut');

      await fetch('/api/v1/mode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'user',
        }),
      });
    } else {
      toast.error('username atau password salah');
    }
    setIsLoading(false);
  };

  const handleGuest = async () => {
    await fetch('/api/v1/mode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'guest',
      }),
    });
    router.push('/bengkel-perut');
    toast.success('Login guest.', {
      style: {
        border: '1px solid #A20A0A',
        color: '#A20A0A',
      },
      iconTheme: {
        primary: '#A20A0A',
        secondary: '#FFFAEE',
      },
    });
  };

  return (
    <form className='mt-5 flex flex-col justify-center items-center'>
      <h2 className='font-medium text-4xl text-center'>Welcome, User!</h2>
      <div className='flex flex-col'>
        <input
          type='text'
          placeholder='username'
          className='bg-[#EBEBEB] w-96 p-3 shadow-bengkel mt-5 rounded-md text-[#383636/80]'
          ref={usernameRef}
          required
        />
        <input
          type='password'
          placeholder='password'
          className='bg-[#EBEBEB] w-96 p-3 shadow-bengkel mt-5 rounded-md text-[#383636/80]'
          ref={passwordRef}
          required
        />
      </div>
      <p className='text-[#383636]/80 mt-3'>Forgot Password?</p>
      <div className='flex flex-col gap-3 mt-3 text-center'>
        <button
          type='submit'
          className='w-96 bg-[#263238] p-3 font-medium text-white rounded-md'
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? <RiLoader4Line className='animate-spin mx-auto' size={20} /> : 'Login'}
        </button>
        <button
          type='button'
          className='w-96 bg-[#263238] p-3 font-medium text-white rounded-md'
          onClick={handleGuest}
        >
          Continue as Guest
        </button>
      </div>
    </form>
  );
}
