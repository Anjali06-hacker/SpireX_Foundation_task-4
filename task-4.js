// SELECT ALL PLAN BUTTONS
// Select all buttons having the "plan-button" class
const planButtons = document.querySelectorAll(".plan-button");
// Find the message area
const message = document.getElementById("message");
// BUTTON CLICK EVENT
// Add a click event to every pricing button
planButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Get the name of the selected plan
        const selectedPlan =
            button.parentElement.querySelector("h2").textContent;
        // Display a message
        message.textContent =
            "You selected the " + selectedPlan + " plan.";
        // Scroll smoothly to the message
        message.scrollIntoView({
            behavior: "smooth"
        });
    });
});