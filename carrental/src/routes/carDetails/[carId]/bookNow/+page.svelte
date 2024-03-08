<script>
    import "../../../styles/global.css";
    import GMap from "../../../lib/gMap.svelte";
    import { pickupLocation } from "../../../stores/mapLocations";

</script>

<GMap location={$pickupLocation} ></GMap>


<style>

</style>