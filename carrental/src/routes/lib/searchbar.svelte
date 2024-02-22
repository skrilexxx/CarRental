<script>
	import Button from "./button.svelte";
    import Pickupbar from "./pickupbar.svelte";
    import Calendar from "./Calendar.svelte";

    export let location;


</script>

<div class="barBg">
    <div class="searchbar">
        <Pickupbar bind:location = {location}></Pickupbar>
        <Calendar id="from"></Calendar>
        <Calendar id="to"></Calendar>
        <Button label="Search" path="/carList"></Button>
    </div>

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

.searchbar :global(button) {
    max-width: 200px;
}

@media (max-width: 820px) {
    .searchbar {
        flex-direction: column;
    }

    .barBg {
        height: 200px;
    }
}

</style>