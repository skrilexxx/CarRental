<script>

    import Location from "./location.svelte";
    import { pickupLocation } from "../stores/mapLocations";


    function showDropdown() {
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.toggle('hidden');

        function handleDocumentClick(event) {
            if (!dropdown.contains(event.target) && !event.target.classList.contains('header') && !event.target.classList.contains('icon') && !event.target.classList.contains('headerP') && !event.target.classList.contains('dropdownarrow') ) {
                dropdown.classList.add('hidden');
                document.removeEventListener('click', handleDocumentClick);
            }
        }

        if (!dropdown.classList.contains('hidden')) {
            document.addEventListener('click', handleDocumentClick);
        }
    }

    function hideDropdown() {
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.add('hidden');
    }

</script>

<div class="content">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="header" on:click={showDropdown}>
        <div class="icon">
            <img src="/dropdownarrow.svg" alt="dropdownarrow" class="dropdownarrow"/>
        </div>
        <p class="headerP">{$pickupLocation}</p>
    </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="dropdown hidden" id="dropdown" on:click={hideDropdown}>
            <p>Choose pick-up location</p>
            <Location bind:selecredLocation={$pickupLocation} label="NC Královo Pole" address="OC, Cimburkova 4, 612 00 Brno-Královo Pole"></Location>
            <Location bind:selecredLocation={$pickupLocation} label="Parkoviště Hlavní nádraží" address="Benešova 52, 602 00 Brno-střed"></Location>
            <Location bind:selecredLocation={$pickupLocation} label="Galerie Vaňkovka" address="Ve Vaňkovce 1, 602 00 Brno-střed"></Location>
            <Location bind:selecredLocation={$pickupLocation} label="Parkoviště Letiště Brno-Tuřany" address="Letiště Brno-Tuřany 904/1, 627 00 Brno - Tuřany"></Location>
        </div>


</div>



<style>

.content {
    width: 100%;
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
    z-index: 1;
    position: absolute;
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

.hidden {
    display: none;
}

p {
    color: black;
    font-family: 'Montserrat';
    font-weight: 600;
}

.dropdown p {
    text-align: left;
    margin-left: 5%;
    margin-top: 30px;
}


@keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
}

@media (max-width: 820px) {
    .content {
        width: 97.5%;
    }

    .header {
        margin: 0;
        margin-top: 1px;
        height: 75px;

    }

    .dropdown {
        height: 40vh;
    }

    .dropdown p {
        margin-top: 18px;
        margin-bottom: 10px;

    }

    .icon {
        width: 10%;
    }
}

</style>