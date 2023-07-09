'use client';
import Container from '@components/container';
import { IHeader } from './interface';
import CustomLink from '@components/custom-link';
import { HiBars3 } from 'react-icons/hi2';
import React, { useState, useEffect } from 'react';
import styles from "./header.module.scss";

export default function Header({ logo, menuItems }: IHeader) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navColor, setnavBgColor] = useState("transparent");
   // menu background color handler
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavBgColor("#FFFFFF") : setnavBgColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

   // toggle : show hide mobile menu 
   const handleShowMobileMenu = (e:React.MouseEvent) => {
    e.preventDefault();
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <header role="presentation" className="fixed w-full z-50" style={{backgroundColor:  navColor}}>
      <Container>
        <div className="flex lg:items-center lg:justify-between py-9 lg:py-8">
          {/* <h1 className="text-4xl text-white">
            <CustomLink href={'/'} isOpenNewTab={false} label={logo} />
          </h1> */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly w-[90%]">
            <div className="logo w-[10%]">
              <img src={logo} alt="logo" />
            </div>
            {menuItems.length > 0 && (
              <nav className={`flex-1 lg:bg-transparent bg-white lg:px-0 px-8 mt-4 lg:mt-0 } `}>
                <ul className={`flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-12 ${styles['menu']} ${showMobileMenu ? "hidden my-[15px]" : "block"}`}>
                  {menuItems.map(({ label, href }, index) => (
                    <li key={index}>
                      <CustomLink
                        className="inline-flex items-end lg:py-0 py-[15px] text-[18px] font-medium text-[#0A142F] transition hover:text-primary"
                        href={href}
                        isOpenNewTab={false}
                        label={label}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
          <div className="w-[10%]" dir="rtl" id="navcrtl" onClick={(e) => handleShowMobileMenu(e)} >
            <HiBars3 className="text-xl"></HiBars3>
          </div>
        </div>
      </Container>
    </header>
  );
}
