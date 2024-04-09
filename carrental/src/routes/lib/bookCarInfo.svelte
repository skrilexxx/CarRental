<script>

    export let carInfo;

    let model = carInfo.model;
    let seats = carInfo.seats;
    let fuel = carInfo.fuel;
    let transmission = carInfo.transmission;
    let engineDisplacement = carInfo.engineDisplacement + " cm³";
    let enginePower = carInfo.enginePower;
    let year = carInfo.year;
    let consumption = carInfo.consumption;

    let picture = "/testCar/testCar.png";


</script>


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

<style>


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
    justify-content: space-between;
    margin-bottom: 10px;
}


.info {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    padding: 0;
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
    margin: 10px 0px;
    font-size: 22px;
    font-weight: 600;
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

@media (max-width: 820px) {

    .carInfo {
        width: 90vw;
    }

    .picture {
        width: 90vw;
        max-width: 90vw;
        max-height: 90vw;
        margin-bottom: 10px;
    }

    .info {
        display: none;
    }

    .title p {
        font-size: 20px;
    }

}

</style>