<script>
    import { page } from "$app/stores";
    import SearchBar from "../../../lib/searchbar.svelte";


    let carName = "BMW 330d xDrive Touring";
    let model = "G21";
    let seats = "5";
    let fuel = "Diesel";
    let transmission = "Manual";
    let engineDisplacement = "2 993 cm³";
    let enginePower = "195 kW";
    let year = "2019";
    let consumption = "8.8";
    let price = "129";

    let picture = "/testCar/testCar.png";

    let location = "Pick-up location";

</script>

<div class="content">

    <div class="name">
        <h2>{carName}</h2>
    </div>

    <div class="inside">
        <div class="carInfo">
            <div class="picture">
                <img src={picture} alt="carPicture">
            </div>

            <div class="info">
                <div class="title">
                    <p>Specifications</p>
                </div>

                <div class="specs">

                    <div class="what">
                        <p>Model:</p>
                        <p>Transmission:</p>
                        <p>Engine power:</p>
                        <p>Engine displacement:</p>
                        <p>Fuel type:</p>
                        <p>Year:</p>
                        <p>Seats:</p>
                        <p>Luggage:</p>
                        <p>Consumption:</p>
                    </div>
                    <div class="value">
                        <p>{model}</p>
                        <p>{transmission}</p>
                        <p>{enginePower}</p>
                        <p>{engineDisplacement}</p>
                        <p>{fuel}</p>
                        <p>{year}</p>
                        <p>{seats}</p>
                        <p>3 big + 2 small</p>
                        <p>{consumption} l/100km</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bookInfo">
            <div class="pickup">
                <SearchBar {location}></SearchBar>
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
    max-width: 80%;
}

.carInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: auto;

}

.picture {
    width: 100%;
    height: 100%;
    max-width: 355px;
    max-height: 215px;
}

.picture img {
    width: 100%;
    height: 100%;
    overflow: hidden;
}


.specs {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
}

.what {
    margin-right: 40px;
}

.value {
    margin-left: 40px
}

.info {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    padding: 0;
}

.title {
    display: flex;
    width: 100%;
    text-align: left;
    margin: 10px 0px;
}

p {
    margin: 4px 0px;
    font-size: 15px;
}

.what p {
    width: 100%;
    text-align: left;
    margin: 0px 0px;
}

.value p {
    width: 100%;
    text-align: right;
    margin: 0px 0px;
}

.title p {
    font-size: 22px;
    font-weight: 600;
    margin-top: 0;
}

h2 {
    display: inline;
    width: 100%;
    text-align: left;
    font-size: 22px;
}

.bookInfo {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    max-width: 780px;
}

.pickup :global(.checkboxes) {
    display: none;
}


.pickup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    width: 400px;
}



.pickup :global(.dropdown) {
    width: 400px;
}

.pickup :global(.headerCal) {
    width: 150px;
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




</style>