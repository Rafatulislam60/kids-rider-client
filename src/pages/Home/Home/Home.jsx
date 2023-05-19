import Banner from "../Banner/Banner";
import ClientSays from "../ClientSays/CilentSays";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Services></Services>
            <ClientSays></ClientSays>
        </div>
    );
};

export default Home;