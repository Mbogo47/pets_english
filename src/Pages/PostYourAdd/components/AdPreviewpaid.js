// AdPreview.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./adpreview.scss";
import { useTranslation } from "react-i18next";
// swiper css
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


const AdPreviewpaid = () => {
  const { t } = useTranslation();
  const [swiper, setSwiper] = useState(null);

  const adSwiper = [
    {
      id: 1,
      AdImage:
        "https://th.bing.com/th/id/OIP.kkU6R6cwD3OTyf0a5IOxhAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      AdImage:
        "https://th.bing.com/th/id/OIP.kkU6R6cwD3OTyf0a5IOxhAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      AdImage:
        "https://th.bing.com/th/id/OIP.kkU6R6cwD3OTyf0a5IOxhAHaE8?rs=1&pid=ImgDetMain",
    },
  ];

  SwiperCore.use([Autoplay, Pagination]);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="AdCard">
      <div className="onehalf">
        <div className="ImageHalf">
          <Swiper
            onSwiper={setSwiper}
            // spaceBetween={10}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {adSwiper.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.AdImage} alt={`Ad ${item.id}`} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev" onClick={handlePrev}>
              <FaAngleLeft />
            </div>
            <div className="swiper-button-next" onClick={handleNext}>
              <FaAngleRight />
            </div>
          </Swiper>
          {/* <img
            src="https://th.bing.com/th/id/OIP.kkU6R6cwD3OTyf0a5IOxhAHaE8?rs=1&pid=ImgDetMain"
            alt=""
          /> */}
        </div>
        <div className="DetailsHalf">
          <div className="TopSection">
            <button className="DraftButton">{t("movetodrafts")}</button>
            <div className="MatingTag">
              <span>$50</span>
              <br></br>
              <span>Mating</span>
            </div>
          </div>
          <div className="PetInfo">
            <p>{t("name")}: John</p>
            <p>{t("gender")}: Male</p>
            <p>{t("age")}: 1</p>
            <p>
              Here is a preview of the description of the pet, but they have to
              view the full ad to learn more...
            </p>
          </div>

          <div className="AdActions">
            <button className="ViewAdButton">{t("viewads")}</button>
            <button
              className="EditButton"
              style={{ background: "transparent", color: "#a6652c" }}
            >
              {t("edit")}
            </button>
          </div>
        </div>
      </div>
      <div className="BottomSection">
        <div className="RightBottomSection">Posted 21 days ago</div>
        <div className="LeftBottomSection">
          {/* <button className="PayButton">
            Pay for Ad <FaMoneyBillWave />
          </button> */}
          <button className="DeleteButton">
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdPreviewpaid;
