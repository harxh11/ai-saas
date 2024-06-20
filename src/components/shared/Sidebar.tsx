import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { SignedIn } from '@clerk/nextjs';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link className='sidebar-logo' href={'/'}>
                <Image src={"/assets/images/logo-text.svg"} alt='logo' width={180} height={28} />
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>

                    </ul>
                </SignedIn>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar;