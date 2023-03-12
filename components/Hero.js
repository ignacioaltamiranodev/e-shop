import { heroInfo } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="container my-4">
      <Swiper
        slidesPerView="auto"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        loop={true}
        autoplay={{ delay: 4000 }}
      >
        {heroInfo.map((item, i) => (
          <SwiperSlide
            className="grid-hero swiper-slide secondary-bg text-white position-relative"
            key={i}
          >
            <div className="d-flex justify-content-center align-items-start flex-column p-5">
              <h1 className="display-2 mb-3 fw-bold text-left">{item.title}</h1>
              <h2 className="display-3 mb-4 fs-3">{item.subtitle}</h2>
              <Link className="btn black-bg mb-3" href="/products">
                Shop Now
              </Link>
            </div>
            <div className="hero-image">
              <Image
                src={item.img}
                width="0"
                height="0"
                style={{ width: '90%', height: 'auto' }}
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
