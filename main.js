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
        bar.style.height = '200px';
    } else {
        alert('Please enter some hours!');
        input.focus();
    }
}
