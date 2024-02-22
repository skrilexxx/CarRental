<script>
    import SearchBar from "../../../lib/searchbar.svelte";
    import CarInfo from "../../../lib/bookCarInfo.svelte";
    import PriceInfo from "../../../lib/bookPriceInfo.svelte";
    import OrderForm from "../../../lib/orderForm.svelte";
    import { pickupLocation } from "../../../stores/mapLocations";


    let carName = "BMW 330d xDrive Touring";


    let selectedlocation = $pickupLocation;


</script>

<div class="content">

    <div class="outside">
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
                    <OrderForm></OrderForm>

                    <PriceInfo days=5></PriceInfo>
                </div>

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
    margin-left: 20px;
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
    height: 250px;
}


.pickup :global(.year) {
    display: none;
}

.pickup :global(.line) {
    display: none;
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

.book :global(.pricebtn button) {
    display: none;
}

.pickup :global(::-webkit-calendar-picker-indicator) {
    width: 25px;
    height: 25px;
    padding-right: 10px;
}

.pickup :global(.input-calendar) {
    font-size: 16px;
}

.pickup :global(.input-calendar)::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
}

.pickup :global(.calendar) {
    width: 100%;
    max-height: 80px;
}


</style>