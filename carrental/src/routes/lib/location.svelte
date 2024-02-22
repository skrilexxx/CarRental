<script>
    import { pickupLocation } from "../stores/mapLocations";

    export let label;
    export let address;
    export let selecredLocation = $pickupLocation;

    function selectLocation() {
        selecredLocation = label;
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="content" on:click={selectLocation}>
    <img class="marker" src="/locationmarker.svg" alt="locationmarker">
    <div class="text">
        <p class="locationLabel">{label}</p>
        <p class="locationAddress">{address}</p>
    </div>
</div>

<style>

.content {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding: 10px 0px;
}

.content:not(:last-child) {
    border-bottom: #626161 2px solid;
}

.content:hover {
    cursor: pointer;
}

.marker {
    margin-left: 5%;
    margin-right: 10px;
}

.locationLabel {
    text-align: left;
    display: block;
    font-weight: 600;
    color: black;
    margin: 0;
}

.locationAddress {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: #626161;
    margin: 0;
}

@media (max-width: 820px) {
    .content {
        padding: 10px 0px;
    }

    .marker {
        margin-left: 10px;
        display: none;
    }

    .text {
        margin-left: 18px;
    }
}

</style>