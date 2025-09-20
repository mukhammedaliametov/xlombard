import React from "react";
import Card1 from "../assets/hero_card1.svg";
import Card2 from "../assets/hero_card2.svg";
import Card3 from "../assets/hero_card3.svg";
import Card4 from "../assets/hero_card4.svg";
import { GrSettingsOption } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-[16px] pt-[170px] flex items-top justify-between">
      <div className="font-inter w-full md:w-[576px]">
        <h1 className="text-[34px]/[42px] md:text-[54px]/[62px] font-[500]">
          <span className="pl-[10px] pt-[10px] md:pl-[20px] md:pt-[20px] p-[5px] md:p-[10px] bg-[#CFE5FF] mr-0 md:-mr-2">
            Л
          </span>
          учшая программа для автоматизации{" "}
          <span className="text-primary-blue">автоломбарда</span>
        </h1>
        <p className="text-[20px]/[25px] md:text-[30px]/[35px] font-[500] mt-[50px]">
          Начните работать в XLombard бесплатно уже сегодня
        </p>
        <div className="flex flex-col sm:flex-row items-left sm:items-center gap-[20px] mt-[35px]">
          <button className="bg-[#0862EE] text-white px-[28px] py-[16px] text-[20px] font-[700] rounded-[10px] cursor-pointer">
            Хочу попробовать!
          </button>
          <p className="text-primary-gray font-[500]">
            Подберем пакет документов <br className="hidden sm:flex" /> и сделаем базовые настройки
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="relative top-[-90px] left-[-40px]">
          <img src={Card1} alt="card_1" className="absolute top-0 w-[160px]" />
          <div className="relative">
            <img
              src={Card2}
              alt="card_2"
              className="absolute top-[105px] right-[-107px] w-[160px]"
            />
            <GrSettingsOption className="absolute top-[152px] right-[-96px] w-[160px] text-white text-[42px]" />
          </div>
          <img
            src={Card3}
            alt="card_3"
            className="absolute bottom-[-190px] w-[160px]"
          />
          <img
            src={Card4}
            alt="card_4"
            className="relative top-[95px] left-[-100px] w-[160px]"
          />
        </div>
        <div className="bg-[#F0F2FE] p-[20px] rounded-[20px] font-inter w-[280px]">
          <h3 className="text-center text-[26px] font-[500]">Функционал</h3>
          <ul className="w-[120px] flex flex-col gap-[10px] my-[10px] list-disc marker:text-primary-blue mx-auto">
            <li>18 модулей</li>
            <li>Полный цикл управления портфелем</li>
            <li>Безопасность</li>
            <li className="uppercase">crm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
