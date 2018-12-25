var leftInput   = document.getElementById("leftIFrameInput");
var leftIFrame  = document.getElementById("leftIFrame");

// Add EventListener for Enter Keypress
if(leftInput) {

    leftInput.addEventListener("keyup", function(event) {

        event.preventDefault();

        if (event.keyCode === 13) {
            var inputValue = leftInput.value;
            leftIFrame.src = inputValue;

            sessionStorage['leftIFrameValue'] = inputValue;
        }
    });
}
