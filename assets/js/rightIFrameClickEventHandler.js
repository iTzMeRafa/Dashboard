var rightInput   = document.getElementById("rightIFrameInput");
var rightIFrame  = document.getElementById("rightIFrame");

// Add EventListener for Enter Keypress
if(rightInput) {

    rightInput.addEventListener("keyup", function(event) {

        event.preventDefault();

        if (event.keyCode === 13) {
            var inputValue = rightInput.value;
            rightIFrame.src = inputValue;

            sessionStorage['rightIFrameValue'] = inputValue;
        }
    });
}
