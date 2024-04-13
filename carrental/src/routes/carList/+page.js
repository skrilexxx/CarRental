export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    const responseCars = await fetch('http://localhost:5173/api/getCars');
    const responseFilters = await fetch('http://localhost:5173/api/getFilters');


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