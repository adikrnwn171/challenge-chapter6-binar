import axios from 'axios';

const fetchCars = async () => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
        return response.data;

    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch cars');
    }
};

export { fetchCars };