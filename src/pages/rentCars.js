import Footer from "../components/Footer";
import FormSection from "../components/Form";
import LandingPage from "../components/LandingPage";
import ListCars from "../components/ListCars";
import Navbar from "../components/Navbar";
import { fetchCars } from "../data/index";
import { useEffect, useState } from "react";

function Rent() {
    const [cars, setCars] = useState([]);
    const [isSearchClicked, setIsSearchClicked] = useState(false); // Tambahkan state untuk menandai apakah tombol "Cari mobil" sudah diklik atau belum

    useEffect(() => {
        async function fetchData() {
            try {
                const carsData = await fetchCars();
                setCars(carsData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleSearch = (typeDriver, date, time, passenger) => {
        const inputTime = new Date(`${date} ${time}`);
        const miliTimeInput = inputTime.getTime();

        const filteredCars = cars.filter((car) => {
            const dataTime = new Date(car.availableAt);
            const miliDataTime = Number(dataTime.getTime());
            console.log(dataTime);
            if (
                typeDriver === car.available &&
                miliTimeInput > miliDataTime &&
                passenger <= car.capacity
            ) {
                return true;
            } else if (
                typeDriver !== car.available &&
                miliTimeInput > miliDataTime &&
                passenger <= car.capacity
            ) {
                return true;
            } else {
                return false;
            }
        });
        // Update state dengan hasil filter
        setCars(filteredCars);
    };

    const handleSearchClick = () => {
        setIsSearchClicked(true); // Set state isSearchClicked menjadi true saat tombol "Cari mobil" diklik
    };

    return (
        <>
            <Navbar />
            <LandingPage showButton={false} />
            <FormSection
                handleSearch={handleSearch}
                onSearchClick={handleSearchClick}
            />
            {isSearchClicked && <ListCars cars={cars} />}
            <Footer />
        </>
    );
}

export default Rent;