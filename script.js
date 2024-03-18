let isWhite = false;

function toggle() {
    const colorChange = document.querySelector("#toggle-icon");
    colorChange.addEventListener("click", function() {
        console.log("button clicked");
        let body = document.querySelector("body");
        let allElements = document.querySelectorAll("body");

        if (isWhite) {
            body.style.backgroundColor = ""; // Reset to original color
            allElements.forEach(element => {
                element.style.color = ""; // Reset to original color
            });
            isWhite = false;
        } else {
            body.style.backgroundColor = "white";
            allElements.forEach(element => {
                element.style.color = "black";
            });
            isWhite = true;
        }
    });
}