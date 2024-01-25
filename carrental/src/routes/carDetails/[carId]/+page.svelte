<script>

    import { page } from "$app/stores";
    import Button from "./../../lib/button.svelte";

    const carId = $page.params.carId;

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

    let path = "/carDetails/" + carId + "/bookNow";

    let shownPicture = "/testCar/testCar.png";

    function changePicture(){
        shownPicture = event.target.src;
    }


</script>


<div class="content">



    <div class="pictures">
        <h2>{carName}</h2>
        <div class="mainPicture">
            <img class="carPic" src={shownPicture} alt="testCar">
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->

        <div class="otherPictures">
            <div class="smallPic" on:click={changePicture}>
                <img class="carPic" src="/testCar/testCar.png" alt="testCar">
            </div>
            <div class="smallPic" on:click={changePicture}>
                <img class="carPic" src="/testCar/testCar3.png" alt="testCar">
            </div>
            <div class="smallPic" on:click={changePicture}>
                <img class="carPic" src="/testCar/testCar4.png" alt="testCar">
            </div>
            <div class="smallPic" on:click={changePicture}>
                <img class="carPic" src="/testCar/testCar5.png" alt="testCar">
            </div>
            <div class="smallPic" on:click={changePicture}>
                <img class="carPic" src="/testCar/testCar6.png" alt="testCar">
            </div>
            <div class="smallPic" on:click={changePicture}>
                <img class="carPic" src="/testCar/testCar7.png" alt="testCar">
            </div>
        </div>
    </div>

    <div class="info">
        <h2 class="invisible">Brno CarRental</h2>
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

        <div class="book">
            <div class="price">
                <p>Price</p>
                <p>{price} € / Day</p>
            </div>
            <div class="button">
                <Button label="Book now" path={path}></Button>
            </div>
        </div>
    </div>


</div>



<style>

.content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
    max-width: 1760px;
}

.pictures {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    margin: 0px 40px ;
    padding: 0;
    max-width: 1760px;
}

.otherPictures {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 60px;
    margin: 10px 0px ;
    padding: 0;
}

.smallPic {
    width: 100px;
    height: 60px;
    margin-right: 10px;
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
}

.carPic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.mainPicture {
    max-width: 700px;
    max-height: 420px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    margin: 0px 40px ;
    padding: 0;
    max-width: 1760px;
}

.specs {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
}

.what {
    margin-right: 60px;
}

.value {
    margin-left: 60px
}

.price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 10px;
}

.title {
    display: flex;
    width: 100%;
    text-align: left;
}

.invisible {
    color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    margin: 4px 0px;
    font-size: 15px;
}

.included .title p {
    margin: 10px 0px;
}

h2 {
    display: inline;
    width: 100%;
    text-align: left;
    margin: 30px 0px;
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

.price p {
    font-size: 22px;
    font-weight: 600;
    margin: 0px 0px;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.button :global(button) {
    width: 100%;
    max-width: 500px;
    height: 60px;
    margin: 0px 0px;
    padding: 0px 0px;
    font-size: 24px;
    font-weight: 600;
    border-radius: 15px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
}


</style>