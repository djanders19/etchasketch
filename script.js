// A browser based etch-a-sketch. Feel free to do whatever you want with it
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

function randRgbValue() {
    return Math.floor(Math.random() * 256)
}

function changeColorWhenMouseEntersDiv(type) {
    $('.container div').mouseenter(function () {
        if (type === 'reset1') {
            // TODO: Give each button a type and then CSS based on that type
            $(this).css('background-color', 'white');//Change clr on mouseenter
        } else if (type === 'reset2') {
            currentOpacity = $(this).css('opacity');
            nextOpacity = currentOpacity - 0.1;
            $(this).css('opacity', nextOpacity);
        } else if (type === 'reset3') {
            changeColorTo = "rgb(" + randRgbValue() + "," + randRgbValue() + "," + randRgbValue() + ")";
            console.log(changeColorTo)
            $(this).css('background-color', changeColorTo);
        }
    });
}

function resetButton(idTag) {
    $('#' + idTag).click(function () {
        var rows = prompt('Please enter a new grid size:'), columns = rows;
        $('#myGrid').empty(); // KILL ALL CHILDREN!!
        makeGrid(rows, columns);
        changeColorWhenMouseEntersDiv(idTag);
    });
}

$(document).ready(function () {
    'use strict'; // fuck you too JSLint
    var rows = 16, columns = 16;
    makeGrid(rows, columns);
    changeColorWhenMouseEntersDiv('reset1'); // My code is self-documenting, clearly
    resetButton('reset1');
    resetButton('reset2');
    resetButton('reset3')
});