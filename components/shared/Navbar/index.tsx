import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomBtn from '@/components/customBtn'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-6 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/assets/logo.svg"
            alt="Rent a Car"
            width={118}
            height={16}
            className="object-contain"
          />
        </Link>
        <CustomBtn
          title="Sign up"
          containerStyles="text-primary-blue min-w-[130px] rounded-full bg-white"
          btnType="button"
        />
      </nav>
    </header>
  )
}

export default Navbar
