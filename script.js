function ahowPopup() {
    alert("Thank you! Your recommendation has been submitted.");
}

function submitRecommendation() {
    const input = document.getElementById("new_recommendation");

    if (input.value.trim() !== "") {
        const section = document.getElementById("recommendations");

        const newDiv = document.createElement("div");
        newDiv.className = "recommendation";
        newDiv.innerText = input.value;

        section.insertBefore(newDiv, section.querySelector(".recommend-form"));

        input.value = "";
        ahowPopup();
    }
}
