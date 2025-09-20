import React from "react";
import { FaRegCopy } from "react-icons/fa";
import idealCard from '../assets/ideal_card.png';
import idealCardIcon from '../assets/ideal_card_icon.svg';

const Ideal = () => {
  const idealItems = [
    {
      name: "Обратный лизинг",
      info: "Описание типа ломбарда на две строки",
      button: "ДКП + ДФА",
    },
    {
      name: "Ломбард Сlassic",
      info: "Описание типа ломбарда на две строки",
      button: "Залоговый билет",
    },
    {
      name: "МФО или КПК",
      info: "Описание типа ломбарда на две строки",
      button: "Займ+Залог",
    },
  ];
  return (
    <div className="bg-[#EFF1FD] md:mt-[40px]">
      <div className="max-w-[1280px] min-h-[100vh] mx-auto px-[16px] py-[60px] font-inter">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px]">
          <div className="w-full lg:w-[270px]">
            <h2 className="text-[28px]/[30px] lg:text-[36px]/[40px] font-[500]">
              <span className="pl-[10px] pt-[10px] md:pl-[20px] md:pt-[20px] p-[5px] bg-primary-green -mr-1">И</span>деально для любого автоломбарда
            </h2>
          </div>
          <div className="flex items-center gap-[20px] overflow-x-scroll w-full lg:overflow-visible">
            {idealItems.map((itm, idx) => (
              <div key={idx} className="bg-[white] rounded-[20px] shadow-md shadow-[#3951DB45]">
                <h3 className="px-[30px] pt-[20px] text-[24px] mb-[10px]">{itm.name}</h3>
                <p className="px-[30px] pb-[20px] w-[282px]">{itm.info}</p>
                <button className="flex items-center bg-[#F0F2FE] w-full py-[20px] cursor-pointer px-[30px] text-[#788EC7]">
                  <FaRegCopy className="text-[18px] mr-[8px]" />
                  {itm.button}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[30px] mt-[40px]">
            <div className="relative">
                <img src={idealCard} alt="card" className="w-[300px] " />
                <img src={idealCardIcon} alt="icon" className="absolute top-[65px] left-[90px] w-[100px]" />
            </div>
            <div className="ml-0 md:ml-[40px]">
                <h3 className="text-[24px] font-[500]"><span className="bg-[#CAD2FF] pl-[15px] pt-[15px] p-[5px] -mr-1">Со</span>здали специальную конфигурацию для обратного лизинга</h3>
                <p>Учли все тонкости бизнеса и подключили необходимые сервисы</p>
                <button className="px-[28px] py-[16px] bg-primary-blue rounded-[10px] cursor-pointer text-white text-[20px] mt-[20px]">Сел и поехал</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Ideal;
