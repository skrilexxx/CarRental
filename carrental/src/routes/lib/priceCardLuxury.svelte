<script>

    import Button from './button.svelte';

</script>

<div class="box">
    <div class="title">
        <h3>Luxury</h3>
    </div>

    <div class="price">
        <div class="dollar"><p>€</p></div>
        <div class="cost"><p>200 +</p></div>
        <div class="day"><p>/ Day</p></div>
    </div>

    <div class="info">
        <p>Give yourself comfort</p>
    </div>

    <div class="features">
        <p>Features:</p>

        <div class="feature">
            <img src="/feature-check.svg" alt="Purple_check">
            <p>High-end vehicles</p>
        </div>
        <div class="feature">
            <img src="/feature-check.svg" alt="Purple_check">
            <p>Provide VIP treatment</p>
        </div>
        <div class="feature">
            <img src="/feature-check.svg" alt="Purple_check">
            <p>Enhanced comfort & convenience</p>
        </div>
        <div class="feature">
            <img src="/feature-check.svg" alt="Purple_check">
            <p>Advanced safety features</p>
        </div>
        <div class="feature">
            <img src="/feature-check.svg" alt="Purple_check">
            <p>Prestigious branding</p>
        </div>
        <div class="feature">
            <img src="/feature-check.svg" alt="Purple_check">
            <p>Premium sound systems </p>
        </div>
    </div>

    <div class="bottom">
        <Button label="Select" path="/carList"></Button>
    </div>

</div>




<style>

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    min-width: 200px;
    height: 480px;
    background-color: white;
    border-radius: 15px;
}

.title {
    display: inline;
    width: 90%;
    margin-left: 18px;
    margin-right: 18px;
}

.price {
    display: flex;
    width: 90%;
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: 7px;
}

.dollar p{
    font-size: 12px;
}

.dollar {
    margin-top: 3px;
    margin-right: 7px;
}

.cost p {
    font-size: 24px;
    font-weight: 600;
}

.day p {
    font-size: 12px;
    color: #626161;
}

.day {
    margin-top: 3px;
    margin-left: 7px;
}

.info {
    display: flex;
    width: 90%;
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: 30px;
}

.info p {
    font-size: 12px;
    font-weight: 600;
}

.features {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: auto;
}

.features p {
    font-weight: 600;
    margin-bottom: 10px;
}

.feature {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.feature img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.feature p {
    font-size: 14px;
    font-weight: 600;
    margin: 0px;
}

.bottom {
    display: flex;
    position: flex-end;
    width: 90%;
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: 18px;
}

.bottom :global(button) {
    height: 50px;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

h3 {
    color: black;
    font-weight: bold;
}

p {
    color: black;
    font-weight: 600;
    margin: 0px;
}

@media (max-width: 820px) {
    .box {
        width: 75vw;
        margin-bottom: 25px;
    }
}
</style>