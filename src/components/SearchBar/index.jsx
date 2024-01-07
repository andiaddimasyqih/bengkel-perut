import Image from 'next/image';
import { GrSearch } from 'react-icons/gr';

export default function SearchBar() {
  return (
    <>
      <div className='min-w-[583px] relative'>
        <input className='rounded-md pl-10 pr-14 py-3 w-full shadow-search' type='text' placeholder='search' />
        <button>
          <GrSearch className='absolute top-1/2 right-8 -translate-y-1/2' size={16} />
        </button>
      </div>
      <h3 className='text-white text-xl mt-24 text-center'>Rasakan Kelezatan Makanan Kami</h3>
      <Image
        className='w-80 h-52 absolute bottom-10 left-16'
        src={'/assets/img/food-menu.svg'}
        width={100}
        height={100}
      />
    </>
  );
}
