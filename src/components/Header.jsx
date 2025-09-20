import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Logo from '../assets/logo.png';

const Header = () => {

    const [nav, setNav] = useState();
    const handleClick = () => setNav(!nav);

    return (
      <div className="bg-white shadow-md fixed w-full z-999">
        <div className="max-w-[1280px] mx-auto px-[16px] shadow-md md:shadow lg:shadow-none flex items-center justify-between py-[20px] font-inter">
          <a href="">
            <img src={Logo} alt="logo" className='w-[170px] md:w-[200px]' />
          </a>
          <div className="flex items-center gap-[20px] xl:gap-[40px]">
            <nav className="hidden lg:flex items-center gap-[20px] xl:gap-[40px]">
              <a href="#" className="hover:text-primary-blue duration-300">
                О программе
              </a>
              <a href="#" className="hover:text-primary-blue duration-300">
                Тарифы и цены
              </a>
              <a href="#" className="hover:text-primary-blue duration-300">
                Контакты
              </a>
            </nav>
            <button className="hidden sm:block border-2 border-primary-blue hover:bg-primary-blue hover:text-white duration-300 py-[12px] px-[16px] rounded-[10px] text-primary-blue cursor-pointer">
              Попробовать бесплатно
            </button>
            <div className="hidden lg:hidden xl:block">
              <p className="text-primary-blue">Заказать обратный звонок</p>
              <a href="tel: +7 (495) 677-95-51">+7 (495) 677-95-51</a>
            </div>
            <div onClick={handleClick} className="block lg:hidden text-[30px]">
              {nav ? <IoClose /> : <LuMenu />}
            </div>
          </div>
          <nav className={`absolute top-0 w-[75%] max-w-[320px] flex flex-col gap-[30px] h-screen shadown-xl bg-white p-[16px] transition-all duration-300 ${nav ? 'left-0' : 'left-[-100%]'}`}>
            <a href="#">
                <img src={Logo} alt="logo" className='w-[170px]' />
            </a>
            <a href="#">О программе</a>
            <a href="#">Тарифы и цены</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
      </div>
    );
};

export default Header;