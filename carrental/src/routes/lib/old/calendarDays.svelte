<script>
    export let month;
    export let year;
    let date = new Date();
    let selectedDay = date.getDate();


    const isLeapYear = (year) => {
        return (
            (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ||
            (year % 100 === 0 && year % 400 === 0)
        );

    };

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28;
    };

    let monthDays = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function generateCalendar() {
        for (let i = 0; i < monthDays[month - 1]; i++) {
            let day = document.createElement("div");
            day.classList.add("day");
            day.innerHTML = i + 1;
            document.querySelector("#calendarDays").appendChild(day);
        }
        return;
    }


</script>

<div class="content">
    <div class="calendar-week-days">
        <div class="calendar-day">Mon</div>
        <div class="calendar-day">Tue</div>
        <div class="calendar-day">Wed</div>
        <div class="calendar-day">Thu</div>
        <div class="calendar-day">Fri</div>
        <div class="calendar-day">Sat</div>
        <div class="calendar-day">Sun</div>
    </div>
    <div class="calendar-days" id="calendarDays">
        {month}
        {year}
    </div>

</div>


<style>

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.calendar-week-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    color: black;
}


.calendar-week-days div {
    display: grid;
    place-items: center;
    font-size: 14px;
    font-weight: 600;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
}


.calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: minmax(20px, auto);
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    height: 100%;
}


div {
    font-family: 'Montserrat', sans-serif;
}

</style>