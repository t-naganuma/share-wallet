import Card from "@/ui/common/card";
import Header from "@/ui/common/header";

const amountList = [
  { id: 1, title: "今月の収支合計", amount: 160000 },
  { id: 2, title: "今月の予算", amount: 160000 },
  { id: 3, title: "今月の収入", amount: 160000 },
  { id: 4, title: "今月の支出", amount: 160000 },
];

export default function Home() {
  const date = "2024年5月";

  return (
    <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-surface'>
      <Header date={date} />
      <main>
        <div className='mx-auto w-full p-4 md:p-6 lg:p-10'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8'>
            {amountList.map((item) => (
              <Card key={item.id} title={item.title} amount={item.amount} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
