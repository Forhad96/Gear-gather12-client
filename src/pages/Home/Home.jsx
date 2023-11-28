import Banner from "../../components/Banner/Banner";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};
export default Home;