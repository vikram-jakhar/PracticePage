import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Deepak from '../Assest/img/deepak.jpg'
import prince from '../Assest/img/prince.jpg'
import Deepak_jhaj from '../Assest/img/deepak2.jpg'
import Naman from '../Assest/img/naman.jpg'
import Sanju from '../Assest/img/sanju.jpg'
import Rhaul from '../Assest/img/Rhaul.jpg'
import Manoj from '../Assest/img/manoj.jpg'
import Vishnu from '../Assest/img/vishnu.jpg'
import Dinesh from '../Assest/img/dinesh.jpg'
import Ram from '../Assest/img/ram.jpg'

const Practice = () => {
    return (
        <div className='min-h-[50vh] max-w-[550px] mx-auto flex justify-center items-center'>
            <Swiper className='max-w-[300px] '
                grabCursor={true}
                effect={'creative'}
                spaceBetween={70}
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [70, -30, -1000],
                    },
                    next: {
                        translate: ['100%', -40, -60],
                    },
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide className='bg-[red] flex-col !flex justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold '>
                    <img className=' rounded-full' src={Deepak} width={90} height={90} alt="deepak" />
                    <p className=''>Deepak Maan</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[green] !flex flex-col justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold '>
                    <img className=' rounded-full ' width={90} height={90} src={Sanju} alt="Sanju" />
                    <p>Sanju Verma</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[red] !flex flex-col justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold '>
                    <img className=' rounded-full ' width={90} height={90} src={Deepak_jhaj} alt="Deepap_jhaj" />
                    <p>Deepak Jhajhria</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[green] flex-col !flex justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold '>
                    <img className=' rounded-full ' width={90} height={90} src={prince} alt="prince" />
                    <p>Prince Mor</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[red] flex-col !flex justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold'>
                    <img className=' rounded-full ' width={90} height={90} src={Rhaul} alt="Rhaul" />
                    <p>Rahul Gill</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[green] flex-col !flex justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold'>
                    <img className=' rounded-full ' width={90} height={90} src={Manoj} alt="Manoj" />
                    <p>Manoj Verma</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[red] flex-col !flex justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold'>
                    <img className=' rounded-full ' width={90} height={90} src={Vishnu} alt="Vishnu" />
                    <p>Vishnu Bishnoi</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[green] flex-col !flex justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold'>
                    <img className=' rounded-full ' width={90} height={90} src={Dinesh} alt="Dinesh" />
                    <p>Dinesh saini</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[red] !flex flex-col justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold '>
                    <img className=' rounded-full ' width={90} height={90} src={Naman} alt="Naman" />
                    <p>Naman Bishnoi</p>
                </SwiperSlide>
                <SwiperSlide className='bg-[green] flex-col !flex justify-center items-center rounded-2xl text-white max-w-[390px] min-h-[240px] text-[32px] font-mono font-semibold '>
                    <img className=' rounded-full ' width={90} height={90} src={Ram} alt="Ram" />
                    <p>Ram Sharma</p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Practice
