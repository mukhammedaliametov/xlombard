import React from 'react';

const Presentation = () => {

    const presItems = [
        {name: 'Электронный акт осмотра ТС', info: 'Позволяет фиксировать все повреждения ТС в электронном виде на планшете'},
        {name: 'Регулярная проверка портфеля по ГИБДД', info: 'Позволяет оперативно узнавать о новых ограничениях, изменениях регистрационных данных и т.д.'},
        {name: 'Корсар — куда уходят ваши клиент', info: 'Позволяет узнать, куда ушёл клиент при отказе от сделки или где перезаложился, если уже был залог'},
        {name: 'Полностью адаптивный интерфейс', info: 'Настройка отображения только необходимы данных для работы конкретного сотрудника или роли'},
        {name: 'GPS-мониторинг текущего портфеля', info: 'Узнаем статусы маяков ТС непосредственно из сервисов телематики'},
        {name: 'Личный кабинет инвестора', info: 'Сделали удобный кабинет, где можно наблюдать все начисленные и выплаченные проценты'},
    ]

    return (
        <div className='bg-[#EFF1FD] min-h-[100vh] py-[50px]'>
        <div className='max-w-[1280px] mx-auto px-[16px] font-inter'>
            <div className='flex flex-col md:flex-row items-left md:items-center justify-between'>
                <h2 className='text-[28px] md:text-[32px] font-[500]'><span className='bg-[#A7E9BE] pl-[15px] pt-[10px] pr-[10px] mr-[-8px]'>Н</span>и у кого нет — <span className='text-primary-blue'>а у нас есть!</span></h2>
                <button className="px-[28px] py-[16px] bg-primary-blue rounded-[10px] cursor-pointer text-white mt-[20px] md:mt-0">Попробовать бесплатно</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] my-[30px]'>
                {presItems.map((item, index) => (
                    <div key={index} className='w-full md:w-[387px] bg-white rounded-[20px] p-[30px]'>
                                <p className='w-[30px] h-[5px] bg-primary-blue rounded-[10px] mb-[6px]'></p>
                        <h3 className='text-[20px] font-[500] my-[12px]'>{item.name}</h3>
                        <p>{item.info}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Presentation;