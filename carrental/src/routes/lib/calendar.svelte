<script>
    import { onMount } from 'svelte';
    import { pickupdate } from "../stores/mapLocations";
    import { dropoffdate } from "../stores/mapLocations";
    export let idCal;



    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    let mounted = false;




    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    let date = yyyy + "-" + mm + "-" + dd;
    let max = yyyy + 2 + "-" + mm + "-" + dd;



    onMount(() => {
        mounted = true;
    });

    $: if (mounted) {
        let input = document.getElementById(idCal);
        input.addEventListener('change', () => {
            if (idCal == "from") {
                pickupdate.set(input.value);
            } else {
                dropoffdate.set(input.value);
            }

        });
    }



</script>


<div class="content">
    <input type="date" class="input-calendar" id={idCal} value={date} min={date} max={max} >
</div>


<style>

.content {
    margin: 3px;
    width:100%;
    height: 72px;
    position: relative;
}

.input-calendar {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 0px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    padding: 0;
    margin: 0;
    text-align: center;
    outline: none;
}

.input-calendar::-webkit-calendar-picker-indicator {
    width: 30px;
    height: 30px;
    color: black;
    padding-right: 20px;
}

.input-calendar::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
}

.input-calendar::-webkit-inner-spin-button {
    display: none;
}

@media (max-width: 820px) {
    .input-calendar {
        font-size: 16px;
    }

    .input-calendar::-webkit-calendar-picker-indicator {
        width: 20px;
        height: 20px;
    }
}

</style>