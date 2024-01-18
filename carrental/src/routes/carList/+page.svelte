<script>

    import CarCard from "../lib/carCard.svelte";
    import FilterBar from "../lib/filterBar.svelte";

</script>

<div class="contentTitle">
    <div class="title">
        <h2>Car List</h2>
    </div>
</div>
<div class="content">
    <div class="home">
        <FilterBar></FilterBar>
        <div class="cards">
            <CarCard></CarCard>
            
        </div>


        
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
    max-width: 433px;
    justify-content: left;
    align-items: left;
}

.home {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    text-align: left;
}

.cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    min-height: 603px;
    max-width: 700px;
    width: 100%;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
}

</style>
