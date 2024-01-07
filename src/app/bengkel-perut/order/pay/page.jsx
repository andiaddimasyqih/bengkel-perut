import ButtonDeleteOrder from '@/components/ButtonDeleteOrder';
import Image from 'next/image';
import Link from 'next/link';
import { GiReceiveMoney } from 'react-icons/gi';
import prisma from '@/libs/prisma';

export default async function Page() {
  const orders = await prisma.orders.findMany({
    include: {
      food: true,
    },
  });

  const totalPrice = orders.reduce((accumulator, item) => {
    const { quantity, food } = item;
    const { price } = food;
    return accumulator + quantity * price;
  }, 0);

  return (
    <div className='py-24 max-w-xl mx-auto'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='bg-[#BE100F] py-3 rounded-xl w-full'>
          <h2 className='text-white text-center font-semibold text-2xl'>Payment Methods</h2>
        </div>
        <ButtonDeleteOrder>
          <Link
            href={totalPrice === 0 ? '/bengkel-perut/menu' : `/bengkel-perut/order/pay/success?p=${totalPrice}`}
            className='block shadow-search w-full rounded-xl relative'
          >
            <GiReceiveMoney className='absolute top-1/2 -translate-y-1/2 left-5' size={30} />
            <p className='text-xl text-center py-3'>Bayar di Cashier</p>
          </Link>
        </ButtonDeleteOrder>
        <ButtonDeleteOrder>
          <Link
            href={totalPrice === 0 ? '/bengkel-perut/menu' : `/bengkel-perut/order/pay/success?p=${totalPrice}`}
            className='w-full p-5 rounded-xl shadow-search flex flex-col gap-5'
          >
            <div>
              <div>
                <h3 className='font-semibold text-xl text-start'>Virtual Account</h3>
              </div>
              <div className='mt-5 flex flex-col gap-3 ml-5'>
                <div className='flex gap-5 items-center'>
                  <Image src={'/assets/img/payment/logo-bca.png'} width={67} height={21} />
                  <p>Bank BCA</p>
                </div>
                <div className='flex gap-5 items-center'>
                  <Image src={'/assets/img/payment/logo-dki.png'} width={67} height={21} />
                  <p>Bank DKI</p>
                </div>
                <div className='flex gap-5 items-center'>
                  <Image src={'/assets/img/payment/logo-mandiri.png'} width={67} height={21} />
                  <p>Bank Mandiri</p>
                </div>
                <div className='flex gap-5 items-center'>
                  <Image src={'/assets/img/payment/logo-bri.png'} width={67} height={21} />
                  <p>Bank Rakyat Indonesia</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className='font-semibold text-xl text-start'>E-Wallet</h3>
              </div>
              <div className='mt-5 flex flex-col gap-3 ml-5'>
                <div className='flex gap-5 items-center'>
                  <Image src={'/assets/img/payment/logo-dana.png'} width={67} height={21} />
                  <p>Dana</p>
                </div>
                <div className='flex gap-5 items-center'>
                  <Image src={'/assets/img/payment/logo-gopay.png'} width={67} height={21} />
                  <p>Gopay</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className='font-semibold text-xl text-start'>QRIS</h3>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-5 items-center'>
                  <Image src={'/assets/img/payment/qris.png'} width={200} height={200} />
                </div>
              </div>
            </div>
          </Link>
        </ButtonDeleteOrder>
      </div>
    </div>
  );
}
