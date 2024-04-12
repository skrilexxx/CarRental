import { writable } from 'svelte/store';


export let activeFilters = writable({
        price: [],
        type: [],
        fuel: []
    }
);