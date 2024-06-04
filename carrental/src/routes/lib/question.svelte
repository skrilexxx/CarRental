<script>

    export let question;
    export let answer;
    export let num;

    let Qid = "Q" + num;
    let Aid = "A" + num;
    let Arrow = "Arrow" + num;

    function showQuestion(event) {
        const question = event.target.id;
        const answer = document.getElementById(question.replace("Q", "A"));
        const arrow = document.getElementsByName(question.replace("Q", "Arrow"));
        answer.classList.toggle("hidden");
        arrow[0].classList.toggle("rotate");
    }


</script>


    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="questionBox">

        <div class="question" id={Qid} on:click={showQuestion} >
            <p id={Qid}>{question}</p>
            <img src="/whiteArrowUp.svg" alt="arrowDown" id={Qid} class="arrow rotate" name={Arrow}>
        </div>

        <div class="answer hidden" id={Aid}>
            <p>{answer}</p>
        </div>
    </div>


<style>

.questionBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-top: 20px;
}

.question {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.question p {
    margin: 0;
    text-align: left;
    font-weight: bold;
}

.question:hover {
    cursor: pointer;
}

.answer {
    display: flex;
    width: 100%;
    margin-top: 10px;
}

.answer p {
    margin: 0;
    text-align: left;
}

.hidden {
    display: none;
    transition-duration: 1s;
}

.rotate {
    transform: rotate(-180deg);
}


@media (max-width: 820px) {
    .questionBox {
        width: 80%;
    }
}

</style>