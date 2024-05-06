import { Menu } from "lucide-react";
import Image from "next/image";

type HeaderProps = {
  date: string;
};

export default function Header({ date }: HeaderProps) {
  return (
    <header className='sticky top-0 z-40 flex bg-white w-full drop-shadow'>
      <div className='flex flex-grow items-center justify-between px-4 py-4 shadow-sm md:px-6 lg:px-11'>
        <div className='flex items-center lg:hidden'>
          <button type='button' aria-controls='sidebar'>
            <Menu size={24} color='#333' />
          </button>
        </div>
        <div>
          <time className='text-xl font-bold' dateTime='2024-05'>
            {date}
          </time>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-4'>
            <span className='hidden lg:block'>
              <span className='block text-sm font-medium'>ニックネーム</span>
            </span>
            <span className='flex items-center justify-center h-12 w-12 rounded-full bg-primary'>
              <Image
                className='h-10 w-10'
                src='/img/kawauso.svg'
                width={40}
                height={40}
                alt='ニックネーム'
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
