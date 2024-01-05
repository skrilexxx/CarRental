<script>

    let selectedDay = 11;
    let weekDay = "Mon";
    let selectedMonth = 9;
    let time = "10:00";

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function showCalendar() {
        console.log("showCalendar");
    }

</script>

<div class="header" on:keypress={showCalendar}>
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


<style>

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    width: 17%;
    height: 72px;
    margin: 3px;
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
</style>