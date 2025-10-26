const toggleButton = document.getElementsByClassName("toggle-button")[0];
const answerContent = document.getElementsByClassName("answer-content")[0];

toggleButton.addEventListener("click", function () {
    if (answerContent.style.display === "block") {
        answerContent.style.display = "none";
        toggleButton.innerText = "顯示答案";
    } else {
        answerContent.style.display = "block";
        toggleButton.innerText = "隱藏答案";
    }
});
