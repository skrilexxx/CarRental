<script>
    import { browser } from '$app/environment';
    import CarCard from "../lib/carCard.svelte";
    import CarCardPhone from "../lib/carCardPhone.svelte";
    import FilterBar from "../lib/filterBar.svelte";

    let screenWith;
    let screenType = "desktop";


    function showFilter() {
        const filterMenu = document.getElementById('filterMenu');
        if (window.innerWidth < 820) {
            filterMenu.classList.toggle("hidden");
        }
    }



</script>

<svelte:window bind:innerWidth={screenWith}></svelte:window>

<div class="contentTitle">
    <div class="title">
        <h2 class="mainTitle">Car List</h2>
    </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="filterButton" id="filterButton" on:click={showFilter}>
    <p>Filter</p>
    <img src="/filterIcon.svg" alt="filterIcon">
</div>

<div class="filterMenu hidden" id="filterMenu">
    <FilterBar></FilterBar>
</div>

<div class="content">
    <div class="home">
        <div class="filter">
            <FilterBar></FilterBar>
        </div>
        <div class="cards">
            {#if screenWith < 820}
                <CarCardPhone></CarCardPhone>
            {:else}
                <CarCard></CarCard>
            {/if}
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
    font-weight: 600;
    font-size: 18px;
    margin: 0px;
    margin-left: 10px;
}

.filterButton img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
}

.filterMenu {
    position: absolute;
    top: 183px;
    width: 250px;
    animation-name: fade-in;
    animation-duration: 0.4s;
}

@keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
    }

@media (max-width: 820px) {
    .filter {
        display: none;
    }

    .filterButton {
        display: flex;
    }

    .cards {
        min-width: 0;
    }
}
</style>
