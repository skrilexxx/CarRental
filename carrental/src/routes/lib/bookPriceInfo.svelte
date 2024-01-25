<script>
    import { page } from "$app/stores";
    import Button from "./button.svelte";

    const carId = $page.params.carId;

    let price = "169";
    export let days = 5; //udelat aby to pocitalo podle tech dni co si vybere uzivatel - az bude kalendar
    let rentalPrice = parseInt(price) * days
    let insuracePrice = 60;
    let totalPrice = rentalPrice + insuracePrice;
    let path = "/carDetails/" + carId + "/checkout";



</script>

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
    <div class="pricebtn">
        <Button label="Book now" path={path}></Button>
    </div>
</div>



<style>

.title {
    display: flex;
    width: 100%;
    text-align: left;
    margin: 10px 0px;
}


.title p {
    font-size: 22px;
    font-weight: 600;
    margin-top: 0;
}

p {
    margin: 4px 0px;
    font-size: 15px;
}


.priceInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    width: 40%;
    border-radius: 15px;
}

.pricebtn {
    display: flex;
    align-items: center;
    width: 100%;
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

.included {
    width: 100%;
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
    font-size: 12px;
}

.price h2 {
    margin: 0px 20px;
    font-size: 18px;
    text-align: left;
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

.priceInfo :global(button) {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    height: 50px;
    max-width: none;
}

</style>