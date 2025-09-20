import React from "react";
import Schema from "../assets/scheme.png";

const Integration = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-[16px] font-inter py-[50px]"> 
      <h2 className="text-[28px] md:text-[32px] font-[500]"><span className="bg-[#CAD2FF] pl-[15px] pt-[15px] mr-[-1px]">И</span>нтеграции с различными системами</h2>
      <div className="flex flex-col md:flex-row items-center justify-between my-[60px]">
        <img src={Schema} alt="schema" />
        <div className="w-full md:w-[345px] pt-[40px] md:pt-0">
        <p className='w-[30px] h-[5px] bg-primary-blue rounded-[10px] mb-[6px]'></p>
          <h3 className="text-[20px] md:text-[24px] font-[500] mb-[10px]">
            Интеграционные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников
          </h3>
          <p className="text-primary-gray">
            Выберите на схеме направление, в котором вас интересует интеграция,
            и мы покажем с какими системами она доступна
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integration;
