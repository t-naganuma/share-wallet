import {
  CalendarDays,
  FileBarChart,
  Home as IHome,
  PieChart,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./navLinks";

const navLinks = [
  { id: 1, href: "/", text: "ホーム", icon: IHome },
  { id: 2, href: "/", text: "収支", icon: CalendarDays },
  { id: 3, href: "/", text: "予算", icon: PieChart },
  { id: 4, href: "/", text: "レポート", icon: FileBarChart },
  { id: 5, href: "/", text: "アカウント設定", icon: Settings },
];

export default function SideNav() {
  return (
    <aside className='absolute left-0 top-0 z-50 flex flex-col h-screen w-60 overflow-y-hidden bg-primary duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full'>
      <div className='flex justify-center px-6 py-6'>
        <h1>
          <Link href='/' className='text-3xl font-semibold'>
            <Image src='/icon.svg' width={60} height={60} alt='家計簿' />
          </Link>
        </h1>
      </div>
      <div className='flex flex-col mt-10 px-6 py-6'>
        <h3 className='mb-4 text-sm font-semibold text-brown'>MENU</h3>
        <ul className='flex flex-col gap-y-4'>
          {navLinks.map((link) => (
            <NavLinks key={link.id} {...link} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
