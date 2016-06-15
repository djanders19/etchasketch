/*jslint browser: true*/
/*global $, jQuery, alert*/

function makeGrid(rows, columns) {
    // Start by making sure that we know how big the pixels should be:
    var squareWidth = Math.floor(528 / rows) + 'px';
    
    for (i = 0; i < rows; i += 1) {
        $('#myGrid').append('<tr></tr>'); // Create rows of grid
    }
    
    for (i = 0; i < columns; i += 1) {
        $('tr').append('<td></td>'); // Create columns of grid
    }
    
    $('td').append('<div></div>'); // Add a div to each grid box
    
    // Set size of each pixel
    $('.container div').css('height', squareWidth);
    $('.container div').css('width', squareWidth);
}

function changeColorWhenMouseEntersDiv() {
    $('.container div').mouseenter(function () {
        $(this).css('background-color', 'red'); // Change color on mouseenter
    });
}

function resetButton() {
    $('button').click(function () {
        var rows = prompt('Please enter a new grid size:'), columns = rows;
        $('#myGrid').empty(); // KILL THE CHILDREN!!
        makeGrid(rows, columns);
        changeColorWhenMouseEntersDiv();
    });
}

$(document).ready(function () {
    'use strict'; // fuck you too JSLint
    var rows = 16, columns = 16;
    makeGrid(rows, columns);
    changeColorWhenMouseEntersDiv(); // My code is self-documenting, clearly
    resetButton();
});