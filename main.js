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
    var input = document.getElementById('hours'),
    hours = input.value;
    var bar = document.getElementById('codeDay');
    if (hours) {
        var heightToChange = input.value * 50;
        if (heightToChange > 1000){
            heightToChange = 1000;
        }
        animate(heightToChange);
    } else {
        alert('Please enter some hours!');
        input.focus();
    }

    assignHours('codeDay', hours);
}

function animate(heightToChange){
  $("#codeDay").animate({
    marginTop: "-100px",
    width: "10%",
    height: heightToChange,
    opacity: 1,
    }, 500 );

  $("#recorder").animate({
    marginTop: "-200px"
    }, 500);

  $(".title").animate({
    opacity: 0
    }, 200);
}

function assignHours(divToAssign, hours){
    document.getElementById(divToAssign).innerHTML = hours;
}