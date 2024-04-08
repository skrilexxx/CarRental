export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    const response = await fetch('http://localhost:5173/api/getCars');

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