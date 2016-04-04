var Tablegen = (function () {
	
	// option defaults
	var options = {
		mockRows: 12,
		mockCols: 12,
		mockCnt: document.body.firstElementChild
	};
	
	var cellsArray = [[]];
	
	var _updateInfo = function () {
		console.log('update info');
	}
	
	var _initialize = function () {
		console.log('initialize');
		console.log(cellsArray);
		cellsArray = new Array(options.mockRows);
		for (var i = 0; i < options.mockCols; i++)
			cellsArray[i] = new Array(options.mockCols);
		console.log(cellsArray);
	}
	
	var _highlightCells = function (rowNum, colNum) {
		for (var i = 0; i < options.mockRows; i++) {
			for (var j = 0; j < options.mockCols; j++) {
				if (i <= rowNum && j <= colNum) {
					cellsArray[i][j].style.background = 'red';
				} else {
					cellsArray[i][j].style.background = 'green';
				}
			}
		}
	}
	
	var _handleHover = function () {
		_highlightCells(this.rowNumber - 1 , this.colNumber - 1);
	}
	
	var _buildMock = function () {
		console.log('building mock in progress,,,');
		for (var i = 1; i <= options.mockRows; i++) {
			var row = document.createElement('div');
			row.className = 'row';
			for (var j = 1; j <= options.mockCols; j++) {
				var cell = document.createElement('div');
				cell.className = 'cell';
				cell.addEventListener('mouseover', _handleHover, false);
				cell.rowNumber = i;
				cell.colNumber = j;
				row.appendChild(cell);
				cellsArray[i-1][j-1] = cell; // let's save the reference
			}
			options.mockCnt.appendChild(row);
		}
	}
	
	var setTableMockContainer = function (el) {
		options.mockCnt = el;
	}
	
	var run = function (opt) {
		console.log('creating table-mock');
		console.log('container', options.mockCnt);
		_initialize();
		_buildMock();
	}
	
	return {
		run: run,
		setTableMockContainer: setTableMockContainer
	}
})();

var cnt = document.getElementById('table-mock');

Tablegen.setTableMockContainer(cnt);
Tablegen.run();

// var currentRows = 1,
	// currentCols = 1,
	// tdWidth = 46,
	// tdHeight = 20,
	// tableMock = document.getElementById('table-mock'),
	// rows = tableMock.getElementsByTagName('tr'),
	// rowsCount = document.getElementById('rows-count'),
	// colsCount = document.getElementById('cols-count');
		
// function insertNewRow() {
	// currentRows++;
	// var newRow = document.createElement('tr');
	// for (var i = currentCols; i--; )
		// newRow.appendChild(document.createElement('td'));
	// tableMock.appendChild(newRow); // tbody ??
// }	
	
// function insertNewColumn() {
	// currentCols++;
	// [].forEach.call(rows, function (row) {
		// row.appendChild(document.createElement('td'));
	// });
// }	

// function removeColumn() {
	// currentCols--;
	// [].forEach.call(rows, function (row) {
		// row.removeChild(row.lastChild);
	// });
// }

// function updateInfo() {
	// rowsCount.textContent = currentRows;
	// colsCount.textContent = currentCols;
// }

// document.addEventListener('click', function (e) {
	// alert(currentRows + " x " + currentCols)
// }, false);

// document.addEventListener('mousemove', function (e) {
	// var x = e.clientX,
	    // y = e.clientY;
	
	// console.log(x, y);
	////nie jestesmy w obszarze; 9, 139 
	// if (y < tableMock.offsetTop || x < tableMock.offsetLeft)
		// return;
	
	// if (x > currentCols * tdWidth)
		// insertNewColumn();
	// else 
		// removeColumn();

	// if (y - tableMock.offsetTop > currentRows * tdHeight)
		// insertNewRow();
	
	
	// updateInfo();
	
// }, false);