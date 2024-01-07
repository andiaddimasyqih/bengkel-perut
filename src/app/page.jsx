import Image from 'next/image';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className="mt-12 flex flex-col bg-[#BE100F] text-white mx-40 p-28 rounded-[35px] bg-[url('/assets/img/chef.png')] bg-no-repeat bg-right bg-contain shadow-bengkel">
        <div className='flex gap-2 pl-10 pb-2'>
          <p className='pt-2'>Order With</p>
          <Image src={'/assets/img/bengkel-perut-txt.png'} alt='bengkel perut' width={200} height={200} />
        </div>
        <p>We provide super-fast delivery or pick-up</p>
      </div>
      <LoginForm />
    </main>
  );
}
