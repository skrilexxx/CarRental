<script>
    import CarCard from "../lib/carCard.svelte";
    import CarCardPhone from "../lib/carCardPhone.svelte";
    import { browser } from '$app/environment';
    import Button from "../lib/button.svelte";
    import { activeFilters } from "../stores/filters.js";
	import { empty, is_empty } from "svelte/internal";
    import FilterTab from "../lib/filterTab.svelte";

    let screenWith;
    export let data;
    let cars = data.cars;
    let filters = data.filters;
    let load = 10;
    let preloadedCars = cars.slice(0, load);
    let filtered = false;

    function showFilter() {
        const filterMenu = document.getElementById('filter');
        if (window.innerWidth < 820) {
            filterMenu.style.display = "flex";
        }
    }

    function transition(screenWith) {
        if (browser) {
            const filterMenu = document.getElementById('filter');
            if (screenWith > 820) {
                filterMenu.style.display = "flex";
            }
            if (screenWith < 820 && filterMenu.style.display == "flex") {
                filterMenu.style.display = "none";
            }
        }
    }

    function loadCars() {
        load += 10;

        if (load > cars.length) {
            preloadedCars = cars;
        }
        else {
            preloadedCars = cars.slice(0, load);
            }

    }

    function displayFilteredCars() {
        let filteredCars = [];
        let aFilters = $activeFilters;

        for (let i = 0; i < cars.length; i++) {
            if (i >= filters.length) {
                break;
            }
            console.log("i: ", i);
            if (cars[i].id == filters[i].carId) {
                for (let obj in aFilters) {
                    if (aFilters[obj].length != 0) {
                        console.log("obj: ", aFilters[obj]);
                        for (let y = 0; y < aFilters[obj].length; y++) {
                            if (aFilters[obj][y] == filters[i].priceF || aFilters[obj][y] == filters[i].typeF || aFilters[obj][y] == filters[i].fuelF || aFilters[obj][y] == filters[i].transF) {
                                if (!filteredCars.includes(cars[i])) {
                                filteredCars.push(cars[i]);
                                filtered = true;
                                console.log("pushed: ", cars[i])
                                }
                            }
                        }
                    }
                }
            }
        }

        if (is_empty(filteredCars) && empty(aFilters.price) && empty(aFilters.type) && empty(aFilters.fuel)){
            filteredCars = cars.slice(0, load);
            filtered = false;
        }


        console.log("filteredCars: ", filteredCars);
        preloadedCars = filteredCars.slice(0, load);
        console.log("preloadedCars: ", preloadedCars);
        return filteredCars;
    }

    $: transition(screenWith);
    console.log("List of cars from DB", cars)
    console.log("List of filters from DB", filters)
</script>


<svelte:window bind:innerWidth={screenWith}></svelte:window>

<div class="contentTitle">
    <div class="title">
        <h2 class="mainTitle">Car List</h2>
    </div>
</div>

<div class="content">
    <div class="home">
        <p class="secondTitle">Which Vehicle do You Want to Drive ?</p>


        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="filter" id="filter" on:click={displayFilteredCars} >
            <FilterTab></FilterTab>
        </div>


        <div class="cards">
            {#key preloadedCars}
            {#each preloadedCars as car}
                {#if screenWith < 820}
                    <CarCardPhone bind:carId = {car.id} bind:carList= {cars}></CarCardPhone>
                {:else}
                    <CarCard bind:carId = {car.id} bind:carList= {cars}></CarCard>
                {/if}
            {/each}
            {/key}

            {#if load <= cars.length && !filtered && preloadedCars.length < cars.length}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="moreBtn"  on:click={loadCars}>
                    <Button label="Show More" path="" action="None"></Button>
                </div>
            {/if}



        </div>


    </div>
</div>


<style>

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1760px;
}

.contentTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1760px;
}

h2 {
    margin-bottom: 20px;
}

.title {
    display: flex;
    max-width: 433px;
    justify-content: left;
    align-items: left;
}

.secondTitle {
    display: inline;
    max-width: 750px;
    font-weight: bold;
    text-align: center;
    margin: 0;

}

.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1760px;
    width: 100%;
    text-align: center;
}

.cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    min-height: 585px;
    max-width: 1000px;
    min-width: 800px; /* docasne snad se to pak zmeni aby to bylo trochu resposive az tam neco bude 800px */
    text-align: left;
    margin-left: 30px;
    margin-right: 30px;
}

.filter {
    display: flex;
    margin-top: 10px;
    margin-bottom: 30px;
}

.moreBtn :global(button) {
    height: 50px;
    width: 120px;
    font-size: medium;
}

@keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
    }

@media (max-width: 820px) {

    .filter {
        display: none;
    }

    .cards {
        min-width: 0;
    }

    .secondTitle {
        display: none;
    }
}
</style>
