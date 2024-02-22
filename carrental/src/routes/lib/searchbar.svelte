<script>
	import Button from "./button.svelte";
    import Pickupbar from "./pickupbar.svelte";
    import Calendar from "./Calendar.svelte";
    import Checkbox from "./checkbox.svelte";


    export let location;

    let aged30_65 = false;
    let youngDriver = false;


    function check(aged30_65, youngDriver) {
        console.log({aged30_65}, {youngDriver});
    }

    $: check(aged30_65, youngDriver);
</script>

<div class="barBg">
    <div class="searchbar">
        <Pickupbar bind:location = {location}></Pickupbar>
        <div class="calendar">
            <Calendar id="from"></Calendar>
            <Calendar id="to"></Calendar>
        </div>
        <Button label="Search" path="/carList"></Button>
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

.searchbar :global(button) {
    max-width: 200px;
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

    .barBg {
        height: auto;
    }

    .checkboxes {
        margin-top: 10px;
        flex-direction: column;
    }

    .searchbar :global(button) {
        max-width: 97.5%;
        height: 75px;
    }

    .calendar {
        width: 99.5%;
    }

}

</style>