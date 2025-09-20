import React from "react";
import Logo from "../assets/footer_logo.png";
import { RiTelegram2Line } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-secondary-blue py-[60px] text-white">
      <div className="max-w-[1280px] mx-auto px-[16px] flex flex-col md:flex-row items-top justify-between gap-[30px] font-inter">
        <div className="flex flex-col justify-between gap-[10px] w-[295px]">
          <div>
            <a href="#">
              <img src={Logo} alt="logo" className="mb-[20px]" />
            </a>
            <p className="">Лучшая программа для автоматизации автоломбарда</p>
          </div>
          <div>
            <p className="font-bold mb-[10px]">© 2023, XLombard</p>
            <p>Конфиденциальность и обработка персональных данных</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[20px] font-bold">О продукте</p>
          <a href="#">Возможности</a>
          <a href="#">Преимущества</a>
          <a href="#">Поддержка</a>
          <a href="#">Обновления</a>
          <a href="#">Интеграции</a>
          <a href="#">Документация</a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[20px] font-bold">О нас</p>
          <a href="#">Константы</a>
          <a href="#">Экспертиза</a>
        </div>
        <div className="flex flex-col gap-[10px] items-start md:items-end">
          <button className="border-2 border-white py-[14px] px-[26px] rounded-[10px] text-[18px] cursor-pointer">Попробовать бесплатно</button>
          <a href="tel: +7 (495) 677-95-51" className="text-[20px] md:text-[24px] font-semibold md:font-bold md:mt-[30px]">+7 (495) 677-95-51</a>
          <p className="font-[300] -mt-3">Заказать обратный звонок</p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] bg-[#476187] flex items-center justify-center text-white text-[20px] cursor-pointer">
              <RiTelegram2Line />
            </div>
            <div className="w-[50px] h-[50px] bg-[#476187] flex items-center justify-center text-white text-[20px] cursor-pointer">
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
