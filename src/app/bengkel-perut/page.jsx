import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import SearchBar from '@/components/SearchBar';
import FoodItem from '@/components/FoodItem';

export default async function Page() {
  return (
    <div>
      <section className='bg-[#F33036] flex flex-col items-center relative'>
        <div className='pt-16 pb-32'>
          <SearchBar />
        </div>
      </section>
      <section className='my-10 grid grid-cols-3 place-items-center'>
        <FoodItem
          title={'Paket Pelajar 1'}
          imageUrl={'/assets/img/foods/paket-pelajar-1.png'}
          backgroundColor={'#613123'}
          id={'clqhcp3ys000014lt9wggx6yi'}
        />
        <FoodItem
          title={'Paket Pelajar 2'}
          imageUrl={'/assets/img/foods/paket-pelajar-2.png'}
          backgroundColor={'#F33036'}
          id={'clqhcp3yt000114ltbfe5llbj'}
        />
        <FoodItem
          title={'Paket Pelajar 3'}
          imageUrl={'/assets/img/foods/paket-pelajar-3.png'}
          backgroundColor={'#D69257'}
          id={'clqhcp3yt000214lt52xk0vd6'}
        />
      </section>
      <section>
        <div className='bg-[#613123] h-32 flex justify-end px-10 items-center'>
          <div className='w-80 bg-white h-12 rounded-3xl'>
            <div className='bg-[#FFC727] ml-auto h-full w-11 rounded-3xl'></div>
          </div>
        </div>
        <div className='bg-[#F33036] h-60'>
          <div className='flex items-end h-full px-40'>
            <div className='px-10 py-5 border-t-[1px] w-full'>
              <div className='text-white flex justify-between'>
                <p>COPYRIGHT &copy; {new Date().getFullYear()}</p>
                <div className='flex gap-2'>
                  <FaWhatsapp size={24} />
                  <FaFacebook size={22} />
                  <FaInstagram size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
