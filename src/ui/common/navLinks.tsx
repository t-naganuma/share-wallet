import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type NavLinksProps = {
  href: string;
  text: string;
  icon: LucideIcon;
};

export default function NavLinks({
  href,
  text,
  icon: IconComponent,
}: NavLinksProps) {
  return (
    <li className='p-2 ease-in-out duration-300 hover:bg-primaryDarken'>
      <Link href={href} className='flex w-full gap-x-3'>
        <IconComponent size={24} color='#333' />
        {text}
      </Link>
    </li>
  );
}
