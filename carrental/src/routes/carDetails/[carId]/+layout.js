
let apiUrlCars = 'http://localhost:5173/api/getCars/';

if (import.meta.env.VITE_VERCEL_ENV === 'production') {
    apiUrlCars = 'https://127.0.0.1/443/api/getCars/';
}


export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    const carId = loadEvent.params.carId;
    const response = await fetch(apiUrlCars + carId);

    if (response.ok) {
        return {
            cars: await response.json()
        }
    };

    return {
        status: response.status,
        error: await response.text()
    };
}