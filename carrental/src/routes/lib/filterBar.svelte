<script>

    import Checkbox from "./checkboxBlack.svelte";
    import { activeFilters } from "../stores/filters.js";

    export let filters = {"price1":false, "price2":false, "price3":false, "price4":false, "price5":false, "type1":false, "type2":false, "type3":false, "type4":false, "type5":false, "type6":false, "type7":false, "type8":false, "type9":false, "fuel1":false, "fuel2":false, "fuel3":false, "fuel4":false};

    function addFilter(filters) {
        for (const [key, value] of Object.entries(filters)) {

            if (value == false) {
                if (key.includes("price") && $activeFilters.price.includes(key)) {
                    $activeFilters.price.splice($activeFilters.price.indexOf(key), 1);
                }
                if (key.includes("type") && $activeFilters.type.includes(key)) {
                    $activeFilters.type.splice($activeFilters.type.indexOf(key), 1);
                }
                if (key.includes("fuel") && $activeFilters.fuel.includes(key)) {
                    $activeFilters.fuel.splice($activeFilters.fuel.indexOf(key), 1);
                }
            }

            if (value == true) {
                if (key.includes("price") && !$activeFilters.price.includes(key)) {
                    $activeFilters.price.push(key);
                }
                if (key.includes("type") && !$activeFilters.type.includes(key)) {
                    $activeFilters.type.push(key);
                }
                if (key.includes("fuel") && !$activeFilters.fuel.includes(key)) {
                    $activeFilters.fuel.push(key);
                }
            }

        }
    }

    $: addFilter(filters)

    function check(activeFilters, filters) {
        console.log("store accessed in filterBar: ", activeFilters);
       console.log(filters);
    }

    //$: check(readFilters, filters);

    function closeFilter() {
            let filterMenu = document.getElementById("filter");
            if (window.innerWidth < 820) {
            filterMenu.style.display = "none";
        }
    }
</script>

<div class="filterBar">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="label" on:click={closeFilter}>
        <h3>Filter</h3>
        <img src="/filterIcon.svg" alt="filterIcon">
    </div>
    <hr class="line">

    <div class="price part">
        <p class="title">Price per day</p>
        <Checkbox  bind:checked={filters["price1"]} label="€0 - €50" name="price" id="price1" value="price1"></Checkbox>
        <Checkbox  bind:checked={filters["price2"]} label="€50 - €100" name="price" id="price2" value="price2"></Checkbox>
        <Checkbox  bind:checked={filters["price3"]} label="€100 - €150" name="price" id="price3" value="price3"></Checkbox>
        <Checkbox  bind:checked={filters["price4"]} label="€150 - €200" name="price" id="price4" value="price4"></Checkbox>
        <Checkbox  bind:checked={filters["price5"]} label="€200 +" name="price" id="price5" value="price5"></Checkbox>
        <hr class="line">
    </div>

    <div class="type part">
        <p class="title">Type</p>
        <Checkbox bind:checked={filters["type1"]} label="Casual" name="type" id="type1" value="casual"></Checkbox>
        <Checkbox bind:checked={filters["type2"]} label="Comfort" name="type" id="type2" value="comfort"></Checkbox>
        <Checkbox bind:checked={filters["type3"]} label="Luxury" name="type" id="type3" value="luxury"></Checkbox>
        <Checkbox bind:checked={filters["type4"]} label="Sport" name="type" id="type4" value="sport"></Checkbox>
        <Checkbox bind:checked={filters["type5"]} label="Super Sport" name="type" id="type5" value="supersport"></Checkbox>
        <Checkbox bind:checked={filters["type6"]} label="SUV" name="type" id="type6" value="suv"></Checkbox>
        <Checkbox bind:checked={filters["type7"]} label="Van" name="type" id="type7" value="van"></Checkbox>
        <Checkbox bind:checked={filters["type8"]} label="Eco" name="type" id="type8" value="eco"></Checkbox>
        <Checkbox bind:checked={filters["type9"]} label="Special" name="type" id="type9" value="special"></Checkbox>

        <hr class="line">
    </div>

    <div class="fuel part">
        <p class="title">Fuel Type</p>
        <Checkbox bind:checked={filters["fuel1"]} label="Petrol" name="fuel" id="fuel1" value="petrol"></Checkbox>
        <Checkbox bind:checked={filters["fuel2"]} label="Diesel" name="fuel" id="fuel2" value="diesel"></Checkbox>
        <Checkbox bind:checked={filters["fuel3"]} label="Electric" name="fuel" id="fuel3" value="electric"></Checkbox>
        <Checkbox bind:checked={filters["fuel4"]} label="Hybrid" name="fuel" id="fuel4" value="hybrid"></Checkbox>

        <hr class="line">
    </div>

</div>



<style>

.filterBar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18vw;
    max-width: 300px;
    height: 750px;
    background-color: white;
    border-radius: 15px;
    margin-bottom: 20px;
    margin-top: 10px;
    border: 4px solid #626161;

}

.title {
    display: inline;
    margin-top: 10px;
    margin-bottom: 10px;
}

.label {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 7.5%;
}

h3 {
    display: inline;
    width: 80%;
    color: black;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 10%;
}

.label img {
    display: none;
    width: 20px;
    height: 20px;
    margin-right: 10%;
    margin-top: 10px;
}

.line {
    width: 80%;
    margin-top: 0;
    margin-bottom: 0;
    border-color: #D9D9D9;
    border-style: solid;
}

.part .line {
    margin-top: 10px;
    width: 100%;
}

.part {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;

}

p {
    display: inline;
    width: 80%;
    color: black;
    font-size: 15px;
    font-weight: 600;
}

@media (max-width: 820px) {
    .filterBar {
        width: 100%;
        max-width: 100%;
    }

    .label h3{
        align-items: left;
    }

    .label img {
        display: flex;
    }

}

</style>