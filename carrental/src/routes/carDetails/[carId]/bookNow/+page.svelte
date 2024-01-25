<script>
    import SearchBar from "../../../lib/searchbar.svelte";
    import GMap from "../../../lib/gMap.svelte";
    import CarInfo from "../../../lib/bookCarInfo.svelte";
    import PriceInfo from "../../../lib/bookPriceInfo.svelte";


    let carName = "BMW 330d xDrive Touring";


    let selectedlocation = "Pick-up location";


</script>

<div class="content">

    <div class="name">
        <h2>{carName}</h2>
    </div>

    <div class="inside">

        <CarInfo></CarInfo>

        <div class="bookInfo">
            <div class="pickup">
                <SearchBar bind:location={selectedlocation}></SearchBar>
            </div>
            <div class="book">

                <GMap location={selectedlocation} ></GMap>

                <PriceInfo days=5> </PriceInfo>
            </div>

        </div>
    </div>


</div>


<style>

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 1760px;
}

.name {
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
    padding: 0;
    width: 100%;
    max-width: 80%;
}


.inside {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
}


h2 {
    width: 100%;
    text-align: left;
    font-size: 22px;
    padding: 0;
}

.bookInfo {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    width: 800px;
}

.pickup :global(.checkboxes) {
    display: none;
}


.pickup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 80px;
    background-color: #626161;
    border-radius: 10px;
}

.pickup :global(.header) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 475px;
}



.pickup :global(.dropdown) {
    width: 475px;
}


.pickup :global(.year) {
    display: none;
}

.pickup :global(.line) {
    display: none;
}

.pickup :global(.calendar) {
    width: 300px;
    height: 250px;
}

.pickup :global(.date) {
    font-size: 18px;
}

.pickup :global(.icon) {
    width: 40px;
    height: 40px;
}

.pickup :global(button) {
    display: none;
}

.pickup :global(.content) {
    margin: 0px 4px;
    width: 100%;
}

.book {
    display: flex;
    flex-direction: row;
    justify-content: center;
}


</style>