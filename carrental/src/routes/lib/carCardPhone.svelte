<script>

    import Button from "../lib/button.svelte";

    export let carId;
    export let carList;
    let id = carId - 1;
    let path = "/carDetails/" + carId;
    let carName = carList[id].carName;
    let seats = carList[id].seats;
    let fuel = carList[id].fuel;
    let transmission = carList[id].transmission;
    let price = carList[id].price;
    let buttontext = "Price " + price + "€ / Day";


</script>


<div class="carCard">
    <div class="content">

        <div class="label">
            <h3>{carName}</h3>
        </div>

        <div class="info">
            <div class="picture">
                <img class="carPic" src="/testCar/testCar.png" alt="testCar">
            </div>

            <div class="text">
                <div class="infoLine">
                    <img class="infoImg" src="/seats.svg" alt="seats">
                    <p>{seats} seats</p>
                </div>
                <div class="infoLine">
                    <img class="infoImg" src="/speedometer.svg" alt="speedometer">
                    <p>Unlimited mileage</p>
                </div>
                <div class="infoLine">
                    <img class="infoImg" src="/fuel.svg" alt="fuel">
                    <p>{fuel}</p>
                </div>
                <div class="infoLine">
                    <img class="infoImg" src="/stearingwheel.svg" alt="stearingwheel">
                    <p>{transmission}</p>
                </div>
            </div>
        </div>
        <div class="button">
            <Button label={buttontext} path={path}></Button>
        </div>
    </div>

</div>



<style>

.carCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    max-width: 800px;
    height: 180px;
    background-color: white;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 20px;
}

.label {
    display: flex;
    justify-content: left;
    width: 95%;
    height: 15%;
    margin: 10px;
    margin-bottom: 5px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 850px;
    border-radius: 15px;
}

.picture {
    width: 50%;
    height: 100%;

}

.info {
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 60%;
}

.text {
    display: flex;
    justify-content: top;
    flex-direction: column;
    height: 100%;
}

.carPic{
    width: 95%;
    height: 90%;
    border-radius: 10px;
}

.infoImg{
    width: 18px;
    height: 18px;
    margin-right: 10px;
}

.infoLine{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 0px;
}

.button{
    width: 95%;
    height: 20%;
    display: flex;
    margin-bottom: 10px
}

.button :global(button) {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin: 0px;
}

h3 {
    color: black;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
}

p {
    color: #626161;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
}


</style>