let isWhite = false;

function toggle() {
    const colorChange = document.querySelector("#toggle-icon");
    let body = document.querySelector("body");
    let allElements = document.querySelectorAll("body");
    let colors = body.style.backgroundColor;
    let projects = document.querySelectorAll("#p-1");
    let about = document.querySelector(".intro-about");
    let message = document.querySelector(".quotes");


    colorChange.addEventListener("click", function() {


        let ids = [".p-1",".p-2",".p-3",".p-4"];

        for(let i = 0;i<ids.length;i++){
            let proj = document.querySelector(ids[i]);
        }




        for(let i = 0; i < allElements.length;i++){
            let background = allElements[i].style.backgroundColor;
            if(background ==="white"){
                allElements[i].style.backgroundColor = colors;
                body.style.backgroundColor = "black";
                allElements[i].style.color = "white";

                about.style.backgroundColor = "black";
                about.style.borderStyle = "solid";
                about.style.borderColor = "rgb(14, 14, 15)";
                message.style.backgroundColor = "black";

                projects.forEach(element => {
                    element.style.backgroundColor = "black";
                    element.style.borderStyle = "solid";
                    element.style.borderColor = "rgb(22, 33, 49)";
                    
                });




            }else if(background !== "white"){
                body.style.backgroundColor = colors;
                allElements[i].style.backgroundColor = "white";
                allElements[i].style.color = "black"; 
                about.style.color = "black";

                about.style.backgroundColor = "white";
                about.style.borderStyle = "solid";
                about.style.borderColor = "honeydew";
                message.style.backgroundColor = "white";


                projects.forEach(element => {
                    element.style.backgroundColor = "#fbfcfc";
                    element.style.borderStyle = "solid";
                    element.style.borderColor = "hsl(180, 4%, 83%)";
                    
                });


            }
      
        }
    });
}

// not useful down code

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