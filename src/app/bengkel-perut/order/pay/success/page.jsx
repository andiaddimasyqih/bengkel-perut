import Image from 'next/image';

export default async function Page({ searchParams }) {
  const { p } = searchParams;

  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }

  return (
    <div className='flex flex-col gap-5 justify-center items-center py-14'>
      <h3 className='text-4xl font-semibold'>Order Successful</h3>
      <Image src={'/assets/img/payment/success.svg'} width={300} height={400} />
      <p className='text-[#37474F]/90'>Pesanan Anda sudah masuk dan sedang diproses</p>
      <div className='text-3xl font-semibold border p-3 border-[#BE100F]'>
        <p>Nomor Pesanan : <span className='ml-3'>{generateRandomString(10)}</span></p>
        <p className='text-center mt-2'>IDR {new Intl.NumberFormat().format(p)}</p>
      </div>
    </div>
  );
}
