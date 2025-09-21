import React from "react";
import Contact1 from "../assets/contact1.svg";
import Contact2 from "../assets/contact2.svg";
import Contact3 from "../assets/contact3.svg";
import { RiTelegram2Line } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-[#EFF1FD] min-h-[100vh] py-[20px] pb-[40px]">
      <div className="max-w-[1280px] mx-auto px-[16px] font-inter flex flex-col md:flex-row items-top justify-between">
        <div>
          <h2 className="text-[28px] md:text-[32px] font-[500]">
            <span className="bg-[#CAD2FF] pl-[15px] pt-[15px] mr-[-1px]">
              О
            </span>
            ткрыты для общения
          </h2>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col md:flex-row items-top gap-[20px] mt-[40px]">
              <img
                src={Contact1}
                alt="contact1"
                className="w-[120px] mb-[-40px] md:mb-0 md:w-auto"
              />
              <div className="">
                <h3 className="text-[24px] mb-[5px]">Пишите нам</h3>
                <p className="text-primary-gray">
                  в мессенджеры на +7 (968) 096-59-40
                </p>
                <div className="flex items-center gap-[10px] mt-[8px]">
                  <div className="w-[40px] h-[40px] bg-blue-500 flex items-center justify-center text-white text-[20px] cursor-pointer">
                    <RiTelegram2Line />
                  </div>
                  <div className="w-[40px] h-[40px] bg-green-500 flex items-center justify-center text-white text-[20px] cursor-pointer">
                    <IoLogoWhatsapp />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-top gap-[20px]">
              <img
                src={Contact2}
                alt="contact1"
                className="w-[120px] mb-[-40px] md:mb-0 md:w-auto"
              />
              <div className="">
                <h3 className="text-[24px] mb-[5px]">Звоните</h3>
                <p className="text-primary-gray">с 10-00 до 18-00 по Мск</p>
                <a href="tel: +7 (495) 677-95-51">+7 (495) 677-95-51</a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-top gap-[20px]">
              <img
                src={Contact3}
                alt="contact1"
                className="w-[120px] mb-[-40px] md:mb-0 md:w-auto"
              />
              <div className="">
                <h3 className="text-[24px] mb-[5px]">Приезжайте</h3>
                <p className="text-primary-gray">
                  Москва, ул. 3-я Северная линия, д. 14, оф. 2
                </p>
                <a href="#">Мы на Яндекс.Картах</a>
              </div>
            </div>
          </div>
        </div>
        <form className="w-full md:w-[583px] mt-[30px] md:mt-0 rounded-[20px] bg-white p-[20px] md:p-[40px] flex flex-col gap-[20px]">
          <h4 className="text-[20px] md:text-[30px]">
            Ответим на любые вопросы:{" "}
            <span className="text-primary-blue">
              расскажем, покажем и дадим попробовать
            </span>
          </h4>
          <p>Проведём онлайн демонстрацию по Zoom!</p>
          <input
            type="text"
            placeholder="Как к вам обращаться (ваше имя)"
            className="border border-[#00000093] py-[10px] px-[20px] rounded-[10px] focus:border-primary-blue duration-300 outline-none"
          />
          <input
            type="text"
            placeholder="Телефон, чтобы мы могли перезвонить"
            className="border border-[#00000093] py-[10px] px-[20px] rounded-[10px] focus:border-primary-blue duration-300 outline-none"
          />
          <input
            type="email"
            placeholder="Электронная почта для отправки ответа"
            className="border border-[#00000093] py-[10px] px-[20px] rounded-[10px] focus:border-primary-blue duration-300 outline-none"
          />
          <textarea
            placeholder="Ваш вопрос"
            className="border border-[#00000093] py-[10px] px-[20px] rounded-[10px] focus:border-primary-blue duration-300 outline-none"
          ></textarea>
          <button className="px-[28px] py-[16px] bg-primary-blue rounded-[10px] cursor-pointer text-white mt-[20px] md:mt-0">
            Попробовать бесплатно
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
