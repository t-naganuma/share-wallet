export default function Card({
  title,
  amount,
}: Readonly<{ title: string; amount: number }>) {
  const amountToLocaleString = (amount: number) =>
    amount.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
  return (
    <div className='flex flex-col gap-3 rounded-sm shadow-md bg-white px-7 py-6'>
      <h4 className='text-sm text-gray'>{title}</h4>
      <p className='font-bold text-2xl'>{amountToLocaleString(amount)}</p>
    </div>
  );
}
