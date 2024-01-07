'use client'

export default function ButtonDeleteOrder({ children }) {
  const handleClick = async () => {
    const resposne = await fetch('/api/v1/order/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: 'clqg99k2b0000c5xb3iphxjzs' }),
    });

    const data = await resposne.json();

    console.log({ data });
  }

  return (
    <button className="w-full" onClick={handleClick}>
      {children}
    </button>
  )
}