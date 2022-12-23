import Link from 'next/link'
import React from 'react'
import { TbUserCheck, TbUserPlus } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
const Navbar = () => {
  return (
    <header className='sticky top-0 z-11 max-w-7xl min-w-[400px] mx-auto bg-lime-200 shadow-md flex items-center justify-between px-8 py-02'>
      <h1 className='w-3/12'>
        <Link
          href='/'
          className='flex items-center gap-x-2 text-2xl font-semibold'
        >
          <SiTailwindcss />
          tailwindcss
        </Link>
      </h1>

      <ul className='flex items-center font-semibold text-md'>
        <li className='p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer'>
          <Link href='/login' className='flex items-center gap-x-1'>
            <TbUserCheck /> SignIn
          </Link>
        </li>
        <li className='p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer'>
          <Link href='/register' className='flex items-center gap-x-1'>
            <TbUserPlus /> SignUp
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
