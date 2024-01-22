<script>
    import { page } from "$app/stores";
    import SearchBar from "../../../lib/searchbar.svelte";
    import { mapLocations } from "../../../lib/mapLocations.js";


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

    let maplocations = mapLocations;


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
            <div class="book">
                <div class="map" id="gMap">
                    <!-- udelat map component -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <iframe class="gMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.1358066540374!2d16.606107544932083!3d49.216951492427064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129472061d2553%3A0x5b8fe721df46e80!2sNC%20Kr%C3%A1lovo%20Pole!5e0!3m2!1sen!2scz!4v1705945028585!5m2!1sen!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

                <div class="priceInfo">
                    <div class="price">
                        <h2>Price</h2>

                        <div class="text">

                        </div>

                    </div>

                    <div class="included">
                        <div class="title">
                            <p>Included in the price</p>
                        </div>
                        <div class="line">
                            <img src="/purpleCheck.svg" alt="purpleCheck">
                            <p>Free cancellation up to 48 hours before pick-up</p>
                        </div>
                        <div class="line">
                            <img src="/purpleCheck.svg" alt="purpleCheck">
                            <p>Theft Protection with € 3 250 excess</p>
                        </div>
                        <div class="line">
                            <img src="/purpleCheck.svg" alt="purpleCheck">
                            <p>Free assistance services 24/7</p>
                        </div>
                        <div class="line">
                            <img src="/purpleCheck.svg" alt="purpleCheck">
                            <p>Unlimited mileage</p>
                        </div>
                    </div>

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

.carInfo {
    display: flex;
    flex-direction: column;
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
    width: 400px;
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

.map {
    display: flex;
    margin: 10px 0px;
    height: 180px;
    width: 60%;
    border-radius: 10px;
}

.gMap {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.priceInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    width: 40%;
    border-radius: 15px;
}

.price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
    width: 100%;
    height: 180px;
    background-color: white;
    border-radius: 10px;
}

.included .title p {
    margin: 10px 0px;
}

.included .title {
    margin: 0px;
}

.line {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 0px;
}

.line img {
    margin-right: 10px;
}

.line p {
    margin: 6px 0px;
    font-size: 11px;
}

.price h2 {
    margin: 0px 20px;
    font-size: 18px;
    color: black;
}

.price .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
    width: 100%;
    height: 100%;
}

</style>