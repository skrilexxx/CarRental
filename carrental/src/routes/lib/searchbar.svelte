<script>
	import Button from "./button.svelte";
    import Pickupbar from "./pickupbar.svelte";
    import Calendar from "./Calendar.svelte";
    import Checkbox from "./checkbox.svelte";
    import { pickupLocation } from "../stores/mapLocations";
    import { pickupdate } from "../stores/mapLocations";
    import { dropoffdate } from "../stores/mapLocations";


    let aged30_65 = false;
    let youngDriver = false;


    function check(aged30_65, youngDriver) {
        console.log({aged30_65}, {youngDriver});
    }

    $: check(aged30_65, youngDriver);
</script>

<div class="barBg">
    <div class="searchbar">
        <div class="pickup">
            <Pickupbar bind:location = {$pickupLocation}></Pickupbar>
        </div>
        <div class="calendar">
            <Calendar idCal="from"></Calendar>
            <Calendar idCal="to"></Calendar>
        </div>
        <div class="btn">
            <Button label="Search" path="/carList"></Button>
        </div>
    </div>
</div>

<div  class="checkboxes">
    <Checkbox bind:checked={youngDriver} label="Young driver (18-22)" name="youngDriver" id="youngDriver" value="youngDriver"></Checkbox>
    <Checkbox bind:checked={aged30_65} label="Aged driver (30-65)" name="aged30-65" id="aged30-65" value="aged30-65"></Checkbox>

</div>


<style>

.barBg {
    background-color: #626161;
    border-radius: 10px;
    width: 100%;
    height: 80px
}

.searchbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1760px;
    height: 100%;
    width: 100%;
}

.calendar {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 1760px;
    height: 100%;
    width: 30%;
}

.pickup {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    max-width: 1760px;
    height: 100%;
    width: 55%;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    max-width: 1760px;
    height: 100%;
    width: 15%;
}

.checkboxes {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}


@media (max-width: 820px) {
    .searchbar {
        flex-direction: column;
        height: auto;
    }

    .pickup {
        width: 100%;
    }

    .barBg {
        height: auto;
    }

    .checkboxes {
        margin-top: 10px;
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .calendar {
        width: 99.5%;
    }

}

</style>