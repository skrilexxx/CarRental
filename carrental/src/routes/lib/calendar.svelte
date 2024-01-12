<script>

    import CalendarDays from "./calendarDays.svelte";


    let weekDay = "Mon";
    let time = "10:00";
    let state = false;
    let date = new Date();
    let selectedDay = date.getDate();
    let selectedMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    let year = currentYear;

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
    }

    function changeMonthAdd() {
        if (selectedMonth == 12) {
            selectedMonth = 1;
            year++;
        } else {
            selectedMonth++;
        }
    }

    function changeMonthRem() {
        if (selectedMonth == 1) {
            selectedMonth = 12;
            year--;
        } else {
            selectedMonth--;
        }
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
            <p>{weekDay} {selectedDay}. {selectedMonth}.</p>
        </div>
        <img  class="line" src="/line.svg" alt="line">
        <div class="time">
            <p>{time}</p>
        </div>
    </div>


    {#if state}
    <div class="calendar">
        <div class="monthTime">
            <div class="arrowleft" on:click={changeMonthRem}>
                <img src="/arrowLeft.svg" alt="arrowleft"/>
            </div>

            <div class="month">
                <p>{months[selectedMonth]}</p>
            </div>

            <div class="arrowright" on:click={changeMonthAdd}>
                <img src="/arrowRight.svg" alt="arrowright"/>
            </div>

            <img  class="lineIn" src="/line.svg" alt="line">

            <div class="time">
                <p>{time}</p>
            </div>
        </div>

        <div class="calendarDays">
            <CalendarDays month={selectedMonth} year={year}></CalendarDays>
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
    width:  50%;
    height: 50%;
}

.line {
    margin-left: 5%;
    margin-right: 2.5%;

}

.lineIn {
    margin-left: 1%;
    margin-right: 1%;
}

.time  {
    margin: 3px;
}

.calendar .time {
    margin: 5px;

}

p {
    color: black;
    font-size: 1vw;
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
    margin-top: 4px;
    animation: fade-in 0.4s;
}

.monthTime {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
}

.monthTime p {
    font-size: 1vw;
    font-weight: 600;
}

.month {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 100%;
}

.arrowleft {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
}

.arrowleft:hover {
    cursor: pointer;
}

.arrowleft img {
    width:  40%;
    height: 40%;
}

.arrowright {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
}

.arrowright img {
    width:  40%;
    height: 40%;
}

.arrowright:hover {
    cursor: pointer;
}


.calendarDays {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 75%;
}

@keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
}
</style>