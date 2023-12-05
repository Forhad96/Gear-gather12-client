import Banner from "../../components/Banner/Banner";
import CouponSlider from "../../components/CouponSlider/CouponSlider";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <TrendingProducts></TrendingProducts>
            <CouponSlider></CouponSlider>

        </div>
    );
};
export default Home;