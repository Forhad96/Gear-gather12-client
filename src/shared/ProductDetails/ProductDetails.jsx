import { Link, useParams } from "react-router-dom";
import useGetSecure from "../../hooks/axiosSecureApi/useGetSecure";
import Modal from "../Modal/Modal";
import Report from "../../pages/Report/Report";
import useCheckRole from "../../hooks/useCheckRole";
import { useEffect, useState } from "react";
import VoteButton from "../VoteButton/VoteButton";
import Slider from "../Slider/Slider";
import Review from "../../components/Reviews/Review";


const ProductDetails = () => {
  const {userInfo} = useCheckRole()
  const { id } = useParams();
  const [disabled,setDisable] = useState(false)
  const { data: product,refetch } = useGetSecure(`/products/${id}`, "singleProduct");
console.log(product.tags);
useEffect(()=>{
  if (
    userInfo?.role === "admin" ||
    userInfo?.role === "moderator" ||
    product?.product_owner === userInfo?.email
  ) {
    setDisable(true);
  }
},[userInfo,product])
  return (
    <div className="p-4">
      {/* Product Details Section */}

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ol role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <Link
                    to="/"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Home
                  </Link>
                </div>
              </li>
              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      to="/products"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      Products
                    </Link>
                  </div>
                </div>
              </li>
            </ol>
          </nav>
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl h-[300px] overflow-hidden rounded-lg">
                    {/* <img
                      className="h-full w-full max-w-full object-cover"
                      src="https://cdn.pixabay.com/photo/2023/09/19/11/01/beach-8262340_1280.jpg"
                      alt=""
                    /> */}
                    <Slider images={images}></Slider>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {product?.name}
              </h1>
              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    />
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    />
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    />
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    />
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    />
                  </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  12 Reviews
                </p>
              </div>

              {/* Product Description */}
              <p className="text-gray-700 mb-4">{product?.description}</p>
              <h2 className="mt-8 text-base text-gray-900">Tags:</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                {product?.tags.map((tag, index) => (
                  <label key={index} className="">
                    <input
                      type="radio"
                      name="subscription"
                      defaultValue="4 Months"
                      className="peer sr-only"
                    />
                    <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                      {tag}
                    </p>
                  </label>
                ))}
              </div>

              {/* External Links */}
              <div className="mb-4">
                <span className="mr-2">
                  External Links:{product?.externalLinks}
                </span>
              </div>
              <div className=" flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">${product?.price}</h1>
                </div>
                {/* vote Button */}
                <VoteButton product={product} refetch={refetch}></VoteButton>

                {/* Report Button */}
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="bg-red-500 disabled:bg-red-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded mb-4"
                  disabled={disabled}
                >
                  Report
                </button>
                <Modal>
                  <Report productId={product?._id}></Report>
                </Modal>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center border-b-2 border-transparent py-4 text-xl font-medium text-gray-600"
                  >
                    Reviews
                  </a>
                </nav>
              </div>
              <div className="mt-0  flow-root sm:mt-12">
                <div className="flex items-center justify-center">
                  <Review productId={product?._id}></Review>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

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