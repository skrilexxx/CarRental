<script>

    export let label;
    export let address;
    export let selecredLocation = "Pick-up location";

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
<img class="line" src="/dropdownline.svg" alt="dropdownline">
<style>

.content {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: auto;
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
    font-size: 1vw;
    font-weight: 600;
    color: black;
    margin: 0;
}

.locationAddress {
    text-align: left;
    font-size: 0.8vw;
    font-weight: 600;
    color: #626161;
    margin: 0;
}

.line {
    margin-bottom: 5px;
    margin-top: 5px;
}
</style>