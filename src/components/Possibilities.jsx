import React from 'react';
import Pos1 from '../assets/pos_1.svg';
import Pos2 from '../assets/pos_2.svg';
import Pos3 from '../assets/pos_3.svg';

const Possibilities = () => {

    const posButtons = [
        {name: 'Лидогенерация и обработка заявок'},
        {name: 'Скоринг и комплексная проверка заёмщика'},
        {name: 'Оформление договора и выдача ДС заёмщику'},
        {name: 'Операционный учёт текущих договоров'},
        {name: 'Полный контроль общения с клиентом'},
        {name: 'Управленческие отчёты, аналитика'},
        {name: 'Учёт всех расходов и доходов'},
        {name: 'Реализация залогового имущества'},
    ]

    return (
        <div className='max-w-[1280px] mx-auto px-[16px] font-inter pt-[40px]'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                <h2 className='text-[28px] md:text-[32px] font-[500] '><span className='pl-[20px] pt-[10px] p-[5px] -mr-1 md:mr-[-5px] bg-[#CFE5FF]'>В</span>озможности <span className='text-primary-blue'>XLombard BPM System</span></h2>
                <button className="px-[28px] py-[16px] bg-primary-blue rounded-[10px] cursor-pointer text-white mt-[20px]">Попробовать бесплатно</button>
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-[30px] my-[60px]'>
                <div className='flex flex-row md:flex-col gap-[10px] w-full md:w-auto overflow-x-scroll md:overflow-visible'>
                    {posButtons.map((item, index) => (
                        <button key={index} className='w-[280px] flex-shrink-0 text-left border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white cursor-pointer duration-300 px-[30px] py-[5px] rounded-[10px]'>
                            {item.name} 
                        </button>
                    ))}
                </div>
                <div className='bg-[#F0F2FE] rounded-[20px] px-[30px] py-[20px]'>
                    <div className='flex flex-col md:flex-row items-center gap-[10px]'>
                        <img src={Pos1} alt="pos1" />
                        <div className='mt-[-30px]'>
                            <p className='w-[30px] h-[5px] bg-primary-blue rounded-[10px] mb-[6px]'></p>
                            <h3 className='font-[500] mb-[10px] text-[20px]'>Агрегатор заявок</h3>
                            <p>Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и т.д.), позволяет более качественно управлять входящими обращениями клиентов</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-[10px]'>
                        <img src={Pos2} alt="pos2" />
                        <div className='mt-[-30px]'>
                            <p className='w-[30px] h-[5px] bg-primary-blue rounded-[10px] mb-[6px]'></p>
                            <h3 className='font-[500] mb-[10px] text-[20px]'>Агрегатор заявок</h3>
                            <p>Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и т.д.), позволяет более качественно управлять входящими обращениями клиентов</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-[10px]'>
                        <img src={Pos3} alt="pos3" />
                        <div className='mt-[-30px]'>
                            <p className='w-[30px] h-[5px] bg-primary-blue rounded-[10px] mb-[6px]'></p>
                            <h3 className='font-[500] mb-[10px] text-[20px]'>Агрегатор заявок</h3>
                            <p>Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и т.д.), позволяет более качественно управлять входящими обращениями клиентов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Possibilities;