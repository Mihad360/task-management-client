import Banner from "./Banner";
import Details from "./Details";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <h1 className="text-2xl text-center py-16 text-black font-semibold">Here is the example of users who can <br /> use this management</h1>
                <Details></Details>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;