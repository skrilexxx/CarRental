<script>
    import { activeFilters } from "../stores/filters.js";
    import FilterCheck from "./filterCheck.svelte";


    export let filters = {"price1":false, "price2":false, "price3":false, "price4":false, "price5":false, "type1":false, "type2":false, "type3":false, "type4":false, "type5":false, "type6":false, "type7":false, "type8":false, "type9":false, "fuel1":false, "fuel2":false, "fuel3":false, "fuel4":false, "manual":false, "automatic":false};
    let vTFilters = 0;
    let gTFilters = 0;
    let fTFilters = 0;
    let pFilters = 0;


    function showDropdown(event) {
        const box = event.target.id;
        const dropdown = document.getElementById(box.replace("Q", "A"));
        dropdown.classList.toggle("hidden");


        function handleDocumentClick(event) {
            if (!dropdown.contains(event.target) && !event.target.classList.contains('sigleFilter') && !event.target.classList.contains('filterBody')  && !event.target.classList.contains('title') && !event.target.classList.contains('dropArrow') && event.target.id !== box ) {
                dropdown.classList.add('hidden');
                document.removeEventListener('click', handleDocumentClick);
            }
        }

        if (!dropdown.classList.contains('hidden')) {
            document.addEventListener('click', handleDocumentClick);
        }
    }

    function addFilter(filters) {
        for (const [key, value] of Object.entries(filters)) {

            if (value == false) {
                if (key.includes("price") && $activeFilters.price.includes(key)) {
                    $activeFilters.price.splice($activeFilters.price.indexOf(key), 1);
                    pFilters--;
                }
                if (key.includes("type") && $activeFilters.type.includes(key)) {
                    $activeFilters.type.splice($activeFilters.type.indexOf(key), 1);
                    vTFilters--;
                }
                if (key.includes("fuel") && $activeFilters.fuel.includes(key)) {
                    $activeFilters.fuel.splice($activeFilters.fuel.indexOf(key), 1);
                    fTFilters--;
                }
                if (key.includes("manual") && $activeFilters.transmission.includes(key)) {
                    $activeFilters.transmission.splice($activeFilters.fuel.indexOf(key), 1);
                    gTFilters--;
                }
                if (key.includes("automatic") && $activeFilters.transmission.includes(key)) {
                    $activeFilters.transmission.splice($activeFilters.fuel.indexOf(key), 1);
                    gTFilters--;
                }

            }

            if (value == true) {
                if (key.includes("price") && !$activeFilters.price.includes(key)) {
                    $activeFilters.price.push(key);
                    pFilters++;
                }
                if (key.includes("type") && !$activeFilters.type.includes(key)) {
                    $activeFilters.type.push(key);
                    vTFilters++;
                }
                if (key.includes("fuel") && !$activeFilters.fuel.includes(key)) {
                    $activeFilters.fuel.push(key);
                    fTFilters++;
                }
                if (key.includes("manual") && !$activeFilters.transmission.includes(key)) {
                    $activeFilters.transmission.push(key);
                    gTFilters++;
                }
                if (key.includes("automatic") && !$activeFilters.transmission.includes(key)) {
                    $activeFilters.transmission.push(key);
                    gTFilters++;
                }
            }

        }
    }

    function countFilters(nFilters) {
        let output;
        if (nFilters == 0) {
            return "";
        }
        else {
            output = "( " + nFilters + " )"
            return output;
        }
    }


    $: addFilter(filters)
    $: console.log(filters);


</script>


<div class="box">
    <!--Vehicle Type-->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="singleFilter" id="VtypeQ">
        <div class="filterBody" id="VtypeQ" on:click={showDropdown}>
            <p class="title" id="VtypeQ" >Vehicle Type {countFilters(vTFilters)}</p>
            <img src="/blckArrowDown.svg" class="dropArrow" alt="Black Arrow Down" id="VtypeQ">
        </div>

        <div class="dropdown hidden" id="VtypeA">
            <FilterCheck bind:checked={filters["type1"]} label="Casual" name="type" id="type1" value="casual"></FilterCheck>
            <FilterCheck bind:checked={filters["type2"]} label="Comfort" name="type" id="type2" value="comfort"></FilterCheck>
            <FilterCheck bind:checked={filters["type3"]} label="Luxury" name="type" id="type3" value="luxury"></FilterCheck>
            <FilterCheck bind:checked={filters["type4"]} label="Sport" name="type" id="type4" value="sport"></FilterCheck>
            <FilterCheck bind:checked={filters["type5"]} label="Super Sport" name="type" id="type5" value="supersport"></FilterCheck>
            <FilterCheck bind:checked={filters["type6"]} label="SUV" name="type" id="type6" value="suv"></FilterCheck>
            <FilterCheck bind:checked={filters["type7"]} label="Van" name="type" id="type7" value="van"></FilterCheck>
            <FilterCheck bind:checked={filters["type8"]} label="Eco" name="type" id="type8" value="eco"></FilterCheck>
            <FilterCheck bind:checked={filters["type9"]} label="Special" name="type" id="type9" value="special"></FilterCheck>
        </div>
    </div>

    <!--Transmition-->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="singleFilter">
        <div class="filterBody" id="TtypeQ" on:click={showDropdown}>
            <p class="title" id="TtypeQ">Gearshift {countFilters(gTFilters)}</p>
            <img src="/blckArrowDown.svg" class="dropArrow" alt="Black Arrow Down" id="TtypeQ">
        </div>

        <div class="dropdown hidden" id="TtypeA">
            <FilterCheck bind:checked={filters["manual"]} label="Manual" name="transmitions", id="trans1" value="manual"></FilterCheck>
            <FilterCheck bind:checked={filters["automatic"]} label="Automatic" name="transmitions", id="trans2" value="automatic"></FilterCheck>
        </div>
    </div>

    <!--Fuel Type-->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="singleFilter">
        <div class="filterBody" id="FtypeQ" on:click={showDropdown}>
            <p class="title" id="FtypeQ">Fuel Type {countFilters(fTFilters)}</p>
            <img src="/blckArrowDown.svg" class="dropArrow" alt="Black Arrow Down" id="FtypeQ">
        </div>

        <div class="dropdown hidden" id="FtypeA">
            <FilterCheck bind:checked={filters["fuel1"]} label="Petrol" name="fuel" id="fuel1" value="petrol"></FilterCheck>
            <FilterCheck bind:checked={filters["fuel2"]} label="Diesel" name="fuel" id="fuel2" value="diesel"></FilterCheck>
            <FilterCheck bind:checked={filters["fuel3"]} label="Electric" name="fuel" id="fuel3" value="electric"></FilterCheck>
            <FilterCheck bind:checked={filters["fuel4"]} label="Hybrid" name="fuel" id="fuel4" value="hybrid"></FilterCheck>
        </div>
    </div>

    <!--Price-->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="singleFilter">
        <div class="filterBody" id="PtypeQ" on:click={showDropdown}>
            <p class="title" id="PtypeQ">Price {countFilters(pFilters)}</p>
            <img src="/blckArrowDown.svg" class="dropArrow" alt="Black Arrow Down" id="PtypeQ">
        </div>

        <div class="dropdown hidden" id="PtypeA">
            <FilterCheck bind:checked={filters["price1"]} label="€0 - €50" name="price" id="price1" value="price1"></FilterCheck>
            <FilterCheck bind:checked={filters["price2"]} label="€50 - €100" name="price" id="price2" value="price2"></FilterCheck>
            <FilterCheck bind:checked={filters["price3"]} label="€100 - €150" name="price" id="price3" value="price3"></FilterCheck>
            <FilterCheck bind:checked={filters["price4"]} label="€150 - €200" name="price" id="price4" value="price4"></FilterCheck>
            <FilterCheck bind:checked={filters["price5"]} label="€200 +" name="price" id="price5" value="price5"></FilterCheck>
        </div>
    </div>

</div>



<style>

.box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    margin: 10px 15px;
}

.singleFilter {
    position: relative;
}

.filterBody {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background-color: white;
    border-radius: 30px;
    margin: 5px 15px;
    height: 40px;
    min-width: 80px;
}

.filterBody:hover {
    cursor: pointer;
}

.title {
    margin: 12px 10px;
    color: black;
    font-weight: bold;
    font-size: 12px;
}

.dropArrow {
    width: 15px;
    height: 15px;
    margin: 10px 10px;
}

.dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    background-color: white;
    width: 150px;
    border-radius: 10px;
    margin-left: 15px;
    padding: 10px 5px;
    padding-bottom: 5px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.hidden {
    display: none;
}

@media (max-width: 820px) {


}


</style>