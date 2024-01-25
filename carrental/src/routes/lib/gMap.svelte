<script>
    import { mapLocations } from "../stores/mapLocations.js";
    import { onMount } from "svelte";

    let maplocations = mapLocations;
    let map;
    export let location;

    function changeMap(location) {
        if (location == "Pick-up location") {
            map = maplocations.default;
        }
        if (location == "NC Královo Pole") {
            map = maplocations.krpole;
        }
        if (location == "Parkoviště Hlavní nádraží") {
            map = maplocations.hlNadr;
        }
        if (location == "Galerie Vaňkovka") {
            map = maplocations.vankovka;
        }
        if (location == "Parkoviště Letiště Brno-Tuřany") {
            map = maplocations.turany;
        }


    }

    $: changeMap(location);


</script>


<div class="map" id="gMap">
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe class="gMap" src={map} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>



<style>

.map {
    display: flex;
    margin: 10px 0px;
    width: 60%;
    border-radius: 10px;
}

.gMap {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}


</style>