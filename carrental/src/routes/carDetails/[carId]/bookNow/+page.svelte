<script>
    import { page } from "$app/stores";
    import SearchBar from "../../../lib/searchbar.svelte";
    import GMap from "../../../lib/gMap.svelte";


    let carName = "BMW 330d xDrive Touring";
    let model = "G21";
    let seats = "5";
    let fuel = "Diesel";
    let transmission = "Manual";
    let engineDisplacement = "2 993 cm³";
    let enginePower = "195 kW";
    let year = "2019";
    let consumption = "8.8";
    let price = "169";


    let days = 5; //udelat aby to pocitalo podle tech dni co si vybere uzivatel - az bude kalendar
    let rentalPrice = parseInt(price) * days
    let insuracePrice = 60;
    let totalPrice = rentalPrice + insuracePrice;

    let picture = "/testCar/testCar.png";

    let selectedlocation = "Pick-up location";


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
                <SearchBar bind:location={selectedlocation}></SearchBar>
            </div>
            <div class="book">

                <GMap location={selectedlocation} ></GMap>

                <div class="priceInfo">
                    <div class="price">
                        <div class="priceTitle">
                            <h2>Price</h2>
                        </div>

                        <div class="text">
                            <div class="item">
                                <p>Price of car rental</p>
                                <p>Insurance</p>
                            </div>
                            <div class="itemPrice">
                                <p>{rentalPrice} €</p>
                                <p>{insuracePrice} €</p>
                            </div>
                        </div>
                        <hr class="greyLine">
                        <div class="finalPrice">
                            <div class="item">
                                <p>Final price</p>
                            </div>
                            <div class="itemPrice">
                                <p>{totalPrice} €</p>
                            </div>
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
    flex-direction: column;
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
    width: 100%;
    margin: 0px 20px;
    font-size: 18px;
    color: black;
}

.price .text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
    width: 100%;
    height: 100%;
}


.price .item {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    width: 100%;
    height: 100%;
}

.price .itemPrice {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    width: 50%;
    height: 100%;
}

.price .itemPrice p{
    color: black;
    font-weight: 600;
    text-align: right;
    margin: 5px 0px;
}

.price .item p{
    color: black;
    font-weight: 600;
    text-align: left;
    margin: 5px 0px;
}

.price .priceTitle {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
}

.finalPrice {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
    width: 100%;
    height: 100%;
}

.finalPrice .item p {
    color: black;
    font-weight: bold;
    font-size: 17px;
}

.finalPrice .itemPrice p {
    color: black;
    font-weight: bold;
    font-size: 17px;
}

.greyLine {
    width: 90%;
    margin-top: 15px;
    margin-bottom: 5px;
    border-color: #D9D9D9;
    border-style: solid;
}

</style>