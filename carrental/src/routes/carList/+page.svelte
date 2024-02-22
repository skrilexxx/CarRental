<script>

    import CarCard from "../lib/carCard.svelte";
    import FilterBar from "../lib/filterBar.svelte";

</script>

<div class="contentTitle">
    <div class="title">
        <h2 class="mainTitle">Car List</h2> <!--mozna oddelat -->
    </div>
</div>

<div class="filterButton">
    <p>Filter</p>
    <img src="/filterIcon.svg" alt="filterIcon">
</div>

<div class="content">
    <div class="home">
        <div class="filter">
            <FilterBar></FilterBar>
        </div>
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
    max-width: 1760px;
    width: 100%;
    text-align: left;
}

.cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    min-height: 585px;
    max-width: 1000px;
    min-width: 800px; /* docasne snad se to pak zmeni aby to bylo trochu resposive az tam neco bude 800px */
    text-align: left;
    margin-left: 30px;
    margin-right: 30px;
}

.filter {
    display: flex;
}

.filterButton {
    display: none;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border: 3px solid #626161;
    background-color: white;
    width: 140px;
    height: 36px;
}

.filterButton p {
    color: black;
    font-weight: bold;
    font-size: 18px;
    margin: 0px;
    margin-left: 10px;
}

.filterButton img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
}


@media (max-width: 820px) {
    .filter {
        display: none;
    }

    .filterButton {
        display: flex;
    }
}
</style>
