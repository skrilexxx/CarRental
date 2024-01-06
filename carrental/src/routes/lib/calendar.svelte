<script>

    let selectedDay = 11;
    let weekDay = "Mon";
    let selectedMonth = 9;
    let time = "10:00";
    let state = false;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const months =  {
        1: "Janary",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }

    function showCalendar() {
        state = !state;
        console.log("Calendar state: " + state);
    }

    function changeMonth() {
        return;
    }

    function changeDay() {
        return;
    }



</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="content">
    <div class="header" on:click={showCalendar}>
        <div class="icon">
            <img src="/calendar.svg" alt="calendar"/>
        </div>
        <div class="date">
            <p>{weekDay} {selectedMonth}/{selectedDay}</p>
        </div>
        <img  class="line" src="/line.svg" alt="line">
        <div class="time">
            <p>{time}</p>
        </div>
    </div>


    {#if state}
    <div class="calendar">
        <div class="monthTime">
            <button on:click={changeMonth}>{"<"}</button>
            <p>{months[selectedMonth]}</p>
            <button on:click={changeMonth}>{">"}</button>
        </div>
    </div>
    {/if}
</div>






<style>

.content {
    margin: 3px;
    width:17%;
    height: 72px;
    position: relative;
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

.header:hover {
    cursor: pointer;
}


.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16%;
    height: 100%;
}

.icon img {
    width:  60%;
    height: 60%;
}

.line {
    margin-left: 5%;
    margin-right: 2.5%;

}

.time  {
    margin: 3px;
}

p {
    color: black;
    font-size: 1.3vw;
    font-weight: 600;

}

.calendar {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    height: 28vh;
    margin-top: 3px;
}

.monthTime {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
}
</style>