let isWhite = false;

function toggle() {
    const colorChange = document.querySelector("#toggle-icon");
    colorChange.addEventListener("click", function() {
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



function show(){
    let button = document.querySelector("#showMoreBtn");
    button.addEventListener('click',function show() {
    // console.log("selected");
    var hiddenElements = document.querySelectorAll('#p-1');
    console.log(hiddenElements)
    for (var i = 0; i < hiddenElements.length; i++) {
        console.log(hiddenElements[i]);
        console.log(i);
      hiddenElements[i].style.display = 'block';
    }
  });


}