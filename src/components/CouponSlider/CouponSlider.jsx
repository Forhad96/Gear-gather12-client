import { SwiperSlide } from "swiper/react";
import Slider from "../../shared/Slider/Slider";
import useGetPublicData from "../../hooks/axiosPublicApi/useGetPublicData";
import CouponCard from "./CouponCard";
import Loader from "../../shared/Loader/Loader";

const CouponSlider = () => {
    const {data:coupons,isLoading} = useGetPublicData('/coupons','coupons')
if(isLoading){
    return <Loader></Loader>
}
    return (
      <div className="max-w-7xl h-[500px] relative overflow-hidden py-6 mx-auto">
        <Slider className="">
          {coupons?.map((coupon, index) => (
            <SwiperSlide className="" key={coupon?._id}>
              <img
                className="object-cover w-full "
                src="https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_1280.jpg"
                alt={`Slide ${index + 1}`}
              />
              <CouponCard coupon={coupon}></CouponCard>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    );
};
export default CouponSlider;


  const images = [
    {
      image_url:
        "https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_1280.jpg",
      description: "Smart Watch",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1590658006821-04f4008d5717?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Wireless Earbuds",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1661254454741-94b4f0e6ebbb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Smart Bulb",
    },
    {
      image_url:
        "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Fitness Tracker",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1623875151988-83a83a375cd4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Wireless Keyboard",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2018/01/17/09/43/iphone-3087842_1280.jpg",
      description: "Smart Display",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2020/09/03/15/32/wireless-charger-5541662_1280.png",
      description: "Wireless Charger",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2019/12/21/10/29/fitness-band-4710206_1280.jpg",
      description: "Fitness Tracker",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2017/02/10/14/10/virtual-2055227_1280.png",
      description: "VR Headset",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2017/01/24/18/26/smart-home-2006026_1280.png",
      description: "Smart Thermostat",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2013/02/01/23/54/sweden-77216_1280.jpg",
      description: "Wireless Security Camera",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2014/02/28/11/55/bell-276831_1280.jpg",
      description: "Smart Doorbell",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2016/02/02/20/42/reading-1176073_1280.jpg",
      description: "eReader",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_1280.jpg",
      description: "Smart Plug",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2021/01/09/12/30/speaker-5902204_1280.jpg",
      description: "Smart Speaker",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2021/02/10/12/36/hue-6001935_1280.jpg",
      description: "Smart Light",
    },
    {
      image_url:
        "https://cdn.pixabay.com/photo/2017/08/30/08/34/robot-mower-2696318_1280.jpg",
      description: "Smart Sprinkler",
    },
  ];