// A browser based etch-a-sketch implemented
// using solely ES6 JS and HTML/CSS.
// Adapted from a project I did in 2016 where
// I used jQuery to do the same.
let MODE = 'bw';

/**
 * Create a grid of squares with the specified
 * number of rows and columns.
 * @param rows - number of rows in the grid
 * @param cols - number of columns in grid
 * @return void
 */
function makeGrid(rows, cols) {
	let grid = document.querySelector('.grid')
	let cellHeight = 100.0 / rows;
	let cellWidth = 100.0 / cols;
	grid.style.gridTemplateRows = `repeat(${rows}, ${cellHeight}%)`
	grid.style.gridTemplateColumns = `repeat(${cols}, ${cellWidth}%)`
	for (let c = 0; c < cols; c++) {
		for (let r = 0; r < cols; r++) {
			let cell = document.createElement('div');
			cell.style.width = `100%`;
			cell.style.height = `100%`
			cell.classList.add('cell');
			bindMouseOverHandler(cell)
			grid.append(cell);
		}
	}
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}


/**
 * Helper function to get an int in rgb range.
 * 
 * @returns A random int in the range [0, 255]
 * indicating an r, g, or b value
 */
function randRgbValue() {
	return Math.floor(Math.random() * 256)
}


/**
 * Add an event listener to an element that changes
 * the color of that element when it is moused over
 * depending on the global MODE constant:
 * 
 * - MODE === 'bw'   : change bg-color to white
 * - MODE === 'gs'   : make element slightly more transparent
 * - MODE === 'rand' : make bg-color a random color 
 * 
 * @param {Element} element indicating the element
 * to bind the handler to.
 */
function bindMouseOverHandler(element) {
	element.addEventListener('mouseover', event => {
		event.preventDefault();
		if (MODE === 'bw') {
			element.style.backgroundColor = 'white';
		} else if (MODE === 'gs') {
			style = getComputedStyle(element);
			element.style.opacity = style.opacity - 0.1;
		} else if (MODE === 'rand') {
			changeColorTo = "rgb(" + randRgbValue() + "," + randRgbValue() + "," + randRgbValue() + ")";
			element.style.backgroundColor = changeColorTo;
		}
	})
}

function resetBW() {
	MODE = 'bw';
	grid = document.querySelector('.grid')
	removeAllChildNodes(grid);
	let rowsCols = prompt("Enter the desired number of rows/cols: ");
	makeGrid(rowsCols, rowsCols);
}

function resetGS() {
	MODE = 'gs';
	grid = document.querySelector('.grid')
	removeAllChildNodes(grid);
	let rowsCols = prompt("Enter the desired number of rows/cols: ");
	makeGrid(rowsCols, rowsCols);
}

function resetRand() {
	MODE = 'rand';
	grid = document.querySelector('.grid')
	removeAllChildNodes(grid);
	let rowsCols = prompt("Enter the desired number of rows/cols: ");
	makeGrid(rowsCols, rowsCols);
}

// Bind button event listeners:
buttonBW = document.querySelector('#reset1');
buttonGS = document.querySelector('#reset2');
buttonRand = document.querySelector('#reset3');

buttonBW.addEventListener('click', event => {
	event.preventDefault();
	resetBW();
})

buttonGS.addEventListener('click', event => {
	event.preventDefault();
	resetGS();
})


buttonRand.addEventListener('click', event => {
	event.preventDefault();
	resetRand();
})
makeGrid(10, 10)