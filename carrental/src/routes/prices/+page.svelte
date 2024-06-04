<script>

    import PriceCardCasual from "../lib/priceCardCasual.svelte";
    import PriceCardEco from "../lib/priceCardEco.svelte";
    import PriceCardLuxury from "../lib/priceCardLuxury.svelte";

</script>

<div class="contentTitle">
    <div class="title">
        <h2>Prices</h2>
    </div>
    <p>Choose one that suits You</p>
</div>

<div class="content">
    <div class="home">
        <div class="prices">
            <PriceCardEco></PriceCardEco>
            <PriceCardCasual></PriceCardCasual>
            <PriceCardLuxury></PriceCardLuxury>
        </div>
        <!--   <a class="instructions" href="\documents\RentInstructions.pdf">Rent Intructions</a> -->
    </div>
</div>


<style>

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        padding: 0;
        max-width: 1760px;
    }

    .contentTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 45px;
        padding: 0;
        max-width: 1760px;
    }

    h2 {
        margin-bottom: 20px;
    }

    .contentTitle p {
        font-weight: bold;
        text-align: center;
        margin: 0;
    }

    .title {
        display: flex;
        max-width: 433px;
        justify-content: left;
        align-items: left;
    }

    .home {
        max-width: 1300px;
        width: 100%;
        text-align: left;
    }

    .prices {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }


    @media (max-width: 820px) {
        .prices {
            flex-direction: column;
        }
    }
</style>
