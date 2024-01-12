<script>

    import Location from "./location.svelte";

    let state = false;
    let location = "Pick-up location";

    function showDropdown() {
        state = !state;
    }







</script>

<div class="content">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="header" on:click={showDropdown}>
        <div class="icon">
            <img src="/dropdownarrow.svg" alt="dropdownarrow"/>
        </div>
        <p>{location}</p>
    </div>

    {#if state}
        <div class="dropdown" id="dropdown">
            <p>Choose pick-up location</p>
            <Location bind:selecredLocation={location} label="NC Královo Pole" address="OC, Cimburkova 4, 612 00 Brno-Královo Pole"></Location>
            <Location bind:selecredLocation={location} label="Parkoviště Hlavní nádraží" address="Benešova 52, 602 00 Brno-střed"></Location>
            <Location bind:selecredLocation={location} label="Galerie Vaňkovka" address="Ve Vaňkovce 1, 602 00 Brno-střed"></Location>
            <Location bind:selecredLocation={location} label="Parkoviště Letiště Brno-Tuřany" address="Letiště Brno-Tuřany 904/1, 627 00 Brno - Tuřany"></Location>
        </div>
    {/if}
</div>



<style>

.content {
    width: 55%;
    height: 100%;
    margin: 3px;
    position: relative;
}

.header {
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: white;
    width: 100%;
    height: 90%;
    border-radius: 10px;
    margin-left: 1px;
    margin-top: 4px;
}

.header:hover {
    cursor: pointer;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5%;
    height: 100%;
    margin-left: 3%;
}

.dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 28vh;
    border-radius: 10px;
    margin-top: 4px;
    overflow-y: scroll;
    animation-name: fade-in;
    animation-duration: 0.4s;
}



.dropdown::-webkit-scrollbar {
    display: none;
}

.dropdown{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

p {
    color: black;
    font-family: 'Montserrat';
    font-weight: 600;
}

.dropdown p {
    text-align: left;
    margin-left: 5%;
    margin-top: 10%;
}

@keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
}

</style>