<script>
    import SearchBar from "../../lib/searchbar.svelte";
    import CarInfo from "../../lib/bookCarInfo.svelte";
    import PriceInfo from "../../lib/bookPriceInfo.svelte";
    import { pickupLocation } from "../../stores/mapLocations";
    import { page } from "$app/stores";

    let screenWith;
    let pageName = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/'));

    let carName = "BMW 330d xDrive Touring";
    let carId = $page.params.carId;


    let selectedlocation = $pickupLocation;

    console.log(pageName);









</script>

<svelte:window bind:innerWidth={screenWith}></svelte:window>

<div class="content">

    <div class="outside">
        <div class="name">
            <h2>{carName}</h2>
        </div>

        <div class="inside">

            <CarInfo></CarInfo>

            <div class="bookInfo">
                <div class="pickup">
                    <SearchBar bind:location={selectedlocation}></SearchBar>
                </div>
                <div class="book">

                    <slot />
                    {#if pageName == "/bookNow"}
                        <PriceInfo> </PriceInfo>
                    {/if}


                    {#if pageName == "/checkout" && screenWith > 820}
                        <PriceInfo> </PriceInfo>
                    {/if}

                </div>

            </div>
        </div>
    </div>
</div>



<style>

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 1760px;
}

.name {
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
    padding: 0;
    width: 100%;
    max-width: 80%;
}



.inside {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
}


h2 {
    width: 100%;
    text-align: left;
    font-size: 22px;
    padding: 0;
}

.bookInfo {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 800px;
}

.pickup :global(.checkboxes) {
    display: none;
}


.pickup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 80px;
    background-color: #626161;
    border-radius: 10px;
}

.pickup :global(.pickup) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;
}



.pickup :global(.dropdown) {
    width: 470px;
    height: 250px;
}


.pickup :global(.icon) {
    width: 40px;
    height: 40px;
}

.pickup :global(.btn) {
    display: none;
}

.pickup :global(.content) {
    margin: 0px 4px;
    width: 100%;
}

.book {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.pickup :global(::-webkit-calendar-picker-indicator) {
    width: 25px;
    height: 25px;
    padding-right: 10px;
}

.pickup :global(.input-calendar) {
    font-size: 16px;
}

.pickup :global(.input-calendar)::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
}

.pickup :global(.calendar) {
    width: 40%;
    max-height: 80px;
}


@media (max-width: 820px) {
    .inside {
        width: 90vw;
        flex-direction: column;
    }

    .book {
        flex-direction: column;
        width: 90vw;
    }

    .bookInfo {
        width: 90vw;
        margin: 0px;
    }

    .pickup {
        flex-direction: column;
        max-height: 160px;
        width: 90vw;
    }

    .name {
        max-width: 90vw;
        width: 90vw;
    }

    .pickup :global(.header) {
        width: 100%;
    }

    .pickup :global(.pickup) {
        width: 90vw;
    }

    .pickup :global(.content) {
        width: 100vw;
        margin: 4px 4px;
    }

    .pickup :global(.calendar) {
        width: 90vw;
    }

    .pickup :global(.dropdown) {
        width: 88vw;
        height: 250px;
    }

}

</style>