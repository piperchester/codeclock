/**
 * Original Author: Piper Chester
 *
 * Creation Date: 4.14.2013
 */

/**
 * Takes the input from a button click, and will convert
 * it into a height to adjust the hour graph.
 */
 function recordHours() {
    var input = document.getElementById('filename'),
    fileName = input.value;
    var bar = document.getElementById('codeDay');
    if (fileName) {
        var heightToChange = input.value * 100;
        animate();
    } else {
        alert('Please enter some hours!');
        input.focus();
    }
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var formatDate = "<b>" + day + "/" + month + "/" + year + "</b>";
    document.getElementById('codeDay').innerHTML = formatDate +": " + fileName + " Hours!";
}

function animate(){

  $("#codeDay").animate({
    width: "50%",
    height: "300px",
    opacity: 1,
        // fontSize: "3em",
        // borderWidth: "10px"
    }, 500 );
}


