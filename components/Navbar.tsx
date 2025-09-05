import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="">
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <Image 
                    src="/images/logo.svg" 
                    alt='logo' 
                    width={46} 
                    height={44}
                />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
           <NavItems />
           <div className='flex items-center gap-4'>
             <SignedOut>
               <SignInButton mode="modal">
                 <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                   Sign In
                 </button>
               </SignInButton>
               <SignUpButton mode="modal">
                 <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90">
                   Sign Up
                 </button>
               </SignUpButton>
             </SignedOut>
             <SignedIn>
               <UserButton afterSignOutUrl="/" />
             </SignedIn>
           </div>
        </div>
    </nav>
  )
}

export default Navbar
