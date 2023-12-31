
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/img (1).jpg'
import img2 from '../../assets/img (1).png'
import img3 from '../../assets/img (2).jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={true}
                modules={[Pagination]}
                autoplay={{ delay: 5000 }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;