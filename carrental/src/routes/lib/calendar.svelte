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
        1: "January",
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

        function handleDocumentClick(event) {
            if (state == false) return;
            const calendar = document.getElementById('calendarDrop');
            //predelat tento line 38 aby to byo lip citelny az budu delat kalendar ten zbytek
            if (!calendar.contains(event.target) && !event.target.classList.contains('headerCal') && !event.target.classList.contains('calendatIcon') && !event.target.classList.contains('icon') && !event.target.classList.contains('line') && !event.target.classList.contains('year') && !event.target.classList.contains('date') && !event.target.classList.contains('dateDiv') && !event.target.classList.contains('monthTime') && !event.target.classList.contains('month') && !event.target.classList.contains('arrowleft') && !event.target.classList.contains('arrowright') && !event.target.classList.contains('yearIn') && !event.target.classList.contains('calendarDays') && !event.target.classList.contains('calendar') && !event.target.classList.contains('monthTime') && !event.target.classList.contains('month') && !event.target.classList.contains('yearIn') && !event.target.classList.contains('calendarDays')  ) {
                state = false;
                document.removeEventListener('click', handleDocumentClick);
            }
        }

        if (state) {
            document.addEventListener('click', handleDocumentClick);
        }
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
    <div class="headerCal" on:click={showCalendar}>
        <div class="icon">
            <img src="/calendar.svg" alt="calendar" class="calendatIcon"/>
        </div>
        <div class="dateDiv">
            <p class="date">{weekDay} {selectedDay}. {selectedMonth}.</p>
        </div>
        <img  class="line" src="/line.svg" alt="line">
        <div class="year">
            <p class="year">{year}</p>
        </div>
    </div>


    {#if state}
    <div class="calendar" id="calendarDrop">
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

            <div class="yearIn">
                <p class="yearIn">{year}</p>
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

.headerCal {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

.headerCal:hover {
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

.year  {
    margin: 3px;
}

.calendar .yearIn {
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