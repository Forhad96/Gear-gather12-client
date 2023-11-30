import Banner from "../../components/Banner/Banner";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import Payment from "../Dashboard/Payment/Payment";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <TrendingProducts></TrendingProducts>
            <Payment></Payment>
        </div>
    );
};
export default Home;