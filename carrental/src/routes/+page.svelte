<script>
	import Button from "./lib/button.svelte";
	import Searchbar from "./lib/searchbar.svelte";


</script>

<div class="contentTitle">
    <div class="title">
        <h2 class="mainTitle" >Rent Car in Brno</h2>
    </div>
</div>


<div class="content">
    <div class="shortText">
        <p>Ready to start your Brno journey?</p>
    </div>

    <Searchbar/>

    <br><br><br><br><br>
    <div class="home">
        <p>Ready to start your Brno journey? Enter your details in the search bar above and let Brno Car Rentals be your trusted companion on the road.</p>
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
    align-items: left;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1760px;
}

.title {
    display: flex;
    max-width: 100%;
    justify-content: left;
    align-items: left;
}

.home p {
    font-family: 'Montserrat', sans-serif;
    max-width: 750px;
    font-weight: bolder;
    margin: 10px;
    text-align: center;
}

.mainTitle {
    padding-left: 0.2vw;
}

.shortText p {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 18px;
    margin: 10px;
}

.shortText {
    display: none;
    text-align: center;
}


@media (max-width: 820px) {
    .shortText {
        display: block;
        margin-bottom: 20px;
    }

    .home {
        display: none;
    }
}

</style>