<script>
    import SearchBar from "../../../lib/searchbar.svelte";
    import GMap from "../../../lib/gMap.svelte";
    import CarInfo from "../../../lib/bookCarInfo.svelte";
    import PriceInfo from "../../../lib/bookPriceInfo.svelte";
    import { pickupLocation } from "../../../stores/mapLocations";

    let carName = "BMW 330d xDrive Touring";


    let selectedlocation = $pickupLocation;






</script>

<GMap location={selectedlocation} ></GMap>


<style>


</style>