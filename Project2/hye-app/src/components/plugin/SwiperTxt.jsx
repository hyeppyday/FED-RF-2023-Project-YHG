import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles

import "./css/swipertxt.css";

export function SwiperTxt() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper2"
        id="myswiper2"
      >
        <SwiperSlide id="swiperslide2">
          <li className="swipertxt">해변 바로 앞</li>
        </SwiperSlide>
        <SwiperSlide id="swiperslide2">
          <li className="swipertxt">멋진 수영장</li>
        </SwiperSlide>
        <SwiperSlide id="swiperslide2">
          <li className="swipertxt">한옥</li>
        </SwiperSlide>
        <SwiperSlide id="swiperslide2">
          <li className="swipertxt">료칸</li>
        </SwiperSlide>
        <SwiperSlide id="swiperslide2">
          <li className="swipertxt">통나무집</li>
        </SwiperSlide>
        <SwiperSlide id="swiperslide2">
          <li className="swipertxt">캠핑장</li>
        </SwiperSlide>
        <SwiperSlide id="swiperslide2">
          <li className="swipertxt">섬</li>
        </SwiperSlide>
        <SwiperSlide id="swiperslide2">
          <li className="swipertxt">키클라데스 주택</li>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
