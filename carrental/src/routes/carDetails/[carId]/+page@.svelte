<script>

    import { page } from "$app/stores";
    import Button from "../../lib/button.svelte";

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

        <div class="slider" id="slider">
            <div class="slides" id="slides">

                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio3">
                <input type="radio" name="radio-btn" id="radio4">
                <input type="radio" name="radio-btn" id="radio5">
                <input type="radio" name="radio-btn" id="radio6">
                <input type="radio" name="radio-btn" id="radio7">

                <div class="slide first">
                    <img src="/testCar/testCar.png" alt="testCar">
                </div>
                <div class="slide">
                    <img src="/testCar/testCar3.png" alt="testCar3">
                </div>
                <div class="slide">
                    <img src="/testCar/testCar4.png" alt="testCar4">
                </div>
                <div class="slide">
                    <img src="/testCar/testCar5.png" alt="testCar5">
                </div>
                <div class="slide">
                    <img src="/testCar/testCar6.png" alt="testCar6">
                </div>
                <div class="slide">
                    <img src="/testCar/testCar7.png" alt="testCar7">
                </div>

            </div>

            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
                <label for="radio5" class="manual-btn"></label>
                <label for="radio6" class="manual-btn"></label>
                <label for="radio7" class="manual-btn"></label>
            </div>
        </div>

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

.slider {
    width: 90vw;
    display: none;
}

.slides {
    display: flex;
    flex-direction: row;
    width: 90vw;
    overflow: hidden;
    border-radius: 8px;
}

.slides input {
    display: none;
}

.slides img{
    width: 90vw;
    height: 100%;
    object-fit: cover;
}

.slide{
    width: 100%;
    transition: 2s;

}

.navigation-manual{
    position: absolute;
    width: 90vw;
    margin-top: 58%;
    display: flex;
    justify-content: center;
}

.manual-btn{
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
}

.manual-btn:not(:last-child){
    margin-right: 10px;
}

.manual-btn:hover{
    background: #BC6FF1;
}

#radio1:checked ~ .first{
    margin-left: 0;
}

#radio3:checked ~ .first{
    margin-left: -100%;
}

#radio4:checked ~ .first{
    margin-left: -200%;
}

#radio5:checked ~ .first{
    margin-left: -300%;
}

#radio6:checked ~ .first{
    margin-left: -400%;
}

#radio7:checked ~ .first{
    margin-left: -500%;
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

@media (max-width: 820px) {
    .content {
        flex-direction: column;
        align-items: center;
    }

    .slider {
        display: flex;
    }

    h2 {
        font-size: 22px;
        margin-bottom: 15px;
    }

    .mainPicture {
        display: none;
    }


    .otherPictures {
        display: none;
    }

    .invisible {
        display: none;
    }

    .info {
        margin-top: 32px;
    }

    .value {
        margin-left: 30px;
    }

    .what {
        margin-right: 30px;
    }

    .specs {
        justify-content: space-between;
    }

    .specs p {
        font-size: 15px;
    }

    .included {
        width: 90vw;
    }

    .title p {
        font-size: 20px;
    }

    .book p {
        font-size: 20px;
    }

    .button :global(button) {
        height: 50px;
        font-size: 20px;
    }

    }


</style>