<script>
    import "../../../styles/global.css";
    import GMap from "../../../lib/gMap.svelte";
    import { pickupLocation } from "../../../stores/mapLocations";

    let selectedlocation = $pickupLocation;


</script>

<GMap location={selectedlocation} ></GMap>


<style>

</style>