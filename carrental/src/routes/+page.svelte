<script>
	import Button from "./lib/button.svelte";
	import Searchbar from "./lib/searchbar.svelte";


</script>

<div class="contentTitle">
    <div class="title">
        <h2>Rent Car in Brno</h2>
    </div>
</div>


<div class="content">
    <Searchbar/>
    <!-- Checkboxes, mozna v searchbaru idk  -->

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
    max-width: 500px;
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


</style>