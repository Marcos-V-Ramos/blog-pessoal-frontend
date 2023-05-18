import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrossel.css";

import { Pagination, Navigation } from "swiper";

const Carrossel = () => {
    
    const images : string[] = [
        "https://i.imgur.com/EYLPjQm.jpg", 
        "https://i.imgur.com/zl9uZzx.jpg", 
        "https://i.imgur.com/153khxC.png", 
        "https://i.imgur.com/RxL2yjz.jpg",
        "https://www.hdwallpaper.nu/wp-content/uploads/2015/06/Dragon-Ball-Z-Wallpapers-HD.jpg"
    ];
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
              {images.map(imagem => {
                return (
                    <SwiperSlide>
                        <img src={imagem} alt="Imagem" />
                    </SwiperSlide>
                );
            })}
            </Swiper>
        </>
    )
}

export default Carrossel