import Aside from '@/components/Aside';

export default function Layout({ children }) {
  return (
    <main className=''>
      <Aside />
      <div className='ml-28 px-10'>
        <div>{children}</div>
      </div>
    </main>
  );
}
