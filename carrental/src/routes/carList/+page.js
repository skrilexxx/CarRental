
let apiUrlCars = 'http://localhost:5173/api/getCars';
let apiUrlFilters = 'http://localhost:5173/api/getFilters';

if (import.meta.env.VITE_VERCEL_ENV === 'production') {
    apiUrlCars = 'https://car-rental-git-main-skrilexxxs-projects.vercel.app/api/getCars';
    apiUrlFilters = 'https://car-rental-git-main-skrilexxxs-projects.vercel.app/api/getFilters';
}



export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    const responseCars = await fetch(apiUrlCars);
    const responseFilters = await fetch(apiUrlFilters);


    if (responseCars.ok && responseFilters.ok) {
        return {
            cars: await responseCars.json(),
            filters: await responseFilters.json()
        }
    }

    else if (!responseCars.ok) return {
        status: responseCars.status,
        error: await responseCars.text()
    }

    else if (!responseFilters.ok) return {
        status: responseFilters.status,
        error: await responseFilters.text()
    };

}