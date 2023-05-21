import Banner from "../Banner/Banner";
import ClientSays from "../ClientSays/CilentSays";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Services></Services>
            <ClientSays></ClientSays>
        </div>
    );
};

export default Home;