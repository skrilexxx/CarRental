
export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    const carId = loadEvent.params.carId;
    const response = await fetch('http://localhost:5173/api/getCars/' + carId );

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