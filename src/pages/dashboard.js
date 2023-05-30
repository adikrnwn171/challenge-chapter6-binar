import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import OurService from "../components/OurService";
import WhyUs from "../components/WhyUs";
// import Testimonial from "../components/Testimonial";
import GettingStarted from "../components/GettingStarted";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.css';


function Dashboard() {
    return (
        <>
            <Navbar />
            <LandingPage showButton={true} />
            <OurService />
            <WhyUs />
            {/* <Testimonial /> */}
            <GettingStarted />
            <FAQ />
            <Footer />
        </>
    );
}

export default Dashboard;