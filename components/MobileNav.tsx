"use client"

import {Sheet,SheetClose,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import { sidebarlinks } from "@/constants/index"
import { cn } from "@/lib/utils"
import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import { usePathname } from "@/node_modules/next/navigation"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
        <SheetTrigger asChild>
            <Image
                src='/icons/hamburger.svg'
                alt="hamburger icon"
                width={36}
                height={36}
                className='cursor-pointer sm:hidden'
            />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
        <Link href="/" className='flex item-center gap-1'>
        <Image
          src="/icons/logo.svg"
          alt="Yoom logo"
          width={32}
          height={32}
          className="max-sm:size:10"
        />
      <p className="text-[26px] font-extrabold text-white">Xoom</p>
      </Link>

      <div className="flex h-[calc(100vh-72px)] flex-col justify-betwen overflow-y-auto"></div>
        <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarlinks.map((link)=>{
                const isActive = pathname === link.route || link.route==''?pathname.startsWith(link.route):false;

                return(
                    <Link 
                    href={link.route} 
                    key={link.label}
                    className={cn('flex gap-4 item-center p-4 rounded-lg justify-start',{'bg-blue-1':isActive})}
                    >
                    <Image 
                        src={link.imgUrl}
                        alt={link.label}
                        width={24}
                        height={24}
                    />
                    <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
                    </Link>
                )
                })}
            </section>
        </SheetClose>
        </SheetContent>
        </Sheet>
    </section >
  )
}

export default MobileNav