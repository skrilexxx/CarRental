<script>

    import Button from "../lib/button.svelte";

    let carName = "BMW 330d xDrive Touring";
    let seats = "5";
    let fuel = "Diesel";
    let transmission = "Manual";
    let price = "129";
    let buttontext = "Price " + price + "€ / Day";


</script>


<div class="carCard">
    <div class="content">
        <div class="picture">
            <img class="carPic" src="/testCar.png" alt="testCar">
        </div>

        <div class="info">
            <div class="text">
                <h3>{carName}</h3>
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
            <div class="button">
                <Button label={buttontext} path="/carList"></Button>
            </div>
        </div>
    </div>

</div>



<style>

.carCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 850px;
    height: 180px;
    background-color: white;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 4px solid #626161;
}

.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 850px;
    border-radius: 15px;
}

.picture {
    width: 33%;
    height: 80%;
    border-radius: 15px;
    margin: 15px;
    margin-right: 10px;

}

.info {
    display: flex;
    flex-direction: row;
    width: 67%;
    height: 80%;
    margin: 15px;
    margin-left: 10px;
}

.text {
    display: flex;
    justify-content: top;
    flex-direction: column;
    height: 100%;
}

.carPic{
    width: 100%;
    height: 100%;
    border-radius: 15px;
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
    width: 45%;
    display: flex;
    justify-content: right;
    align-items: flex-end;

}

.button :global(button) {
    width: 100%;
    height: 30%;
    border-radius: 15px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
}

h3 {
    color: black;
    margin-top: 0px;
    margin-bottom: 11px;
    font-size: 20px;
}

p {
    color: #626161;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 16px;
}



</style>