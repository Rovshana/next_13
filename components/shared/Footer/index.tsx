import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto flex justify-center items-center pt-[30px] ">
      <div className="footer-container">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={90} height={28} />
        </Link>
        <ul className="cursor-pointer">
          <li className="  font-bold text-black">About</li>

          <li>HomePage</li>
          <li>Rental Cars</li>
          <li>Company</li>
          <li>Need to Know</li>
          <li>Contacts</li>
        </ul>
        <ul>
          <li className=" font-bold text-black">Company</li>
          <li>Rental Cars</li>
          <li>Company</li>
          <li>Need to Know</li>
          <li>Contacts</li>
        </ul>
        <ul>
          <li className=" font-bold text-black">HomePage</li>
          <li>Rental Cars</li>
          <li>Company</li>
          <li>Need to Know</li>
          <li>Contacts</li>
        </ul>
        <div>
          <span className=" font-bold text-black">Follow us</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
