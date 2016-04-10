var Tablegen = (function () {
	'use strict';
	// option defaults
	var options = {
		mockRows: 12,
		mockCols: 12,
		mockCnt: document.body.firstElementChild,
		highlightBgColor: '#333',
		highlightBorderColor: '#111'
	};
	
	var cellsArray;

	var currRows, currCols;
	
	var _initialize = function () {
		cellsArray = new Array(options.mockRows);
		for (var i = 0; i < options.mockCols; i++)
			cellsArray[i] = new Array(options.mockCols);
	};
	
	var _updateInfo = function () {
		console.log('update info');
	};
	
	var _highlightCells = function (rowNum, colNum) {
		for (var i = 0; i < options.mockRows; i++) {
			for (var j = 0; j < options.mockCols; j++) {
				if (i <= rowNum && j <= colNum) {
					cellsArray[i][j].style.background = options.highlightBgColor;
				} else {
					cellsArray[i][j].style.background = '';
				}
			}
		}
	};
	
	var _handleHover = function () {
		currRows = this.rowNumber;
		currCols = this.colNumber;
		// odejmuje jeden bo tablica jest numerowana od zera
		_highlightCells(this.rowNumber - 1 , this.colNumber - 1);
	};

	var _generateCode = function () {
		var output = '<table>\n';
		for (var i = 1; i <= currRows; i++) {
			output += '  <tr>\n';
			for (var j = 1; j <= currCols; j++) {
				output += '    <td></td>\n';
			}
			output += '  </tr>\n';
		}
		output += '</table>';
		return output;
	};

	var _buildMock = function () {
		console.log('building mock in progress,,,');
		for (var i = 1; i <= options.mockRows; i++) {
			var row = document.createElement('div');
			row.className = 'row';
			for (var j = 1; j <= options.mockCols; j++) {
				var cell = document.createElement('div');
				cell.className = 'cell';
				cell.rowNumber = i;
				cell.colNumber = j;
				cell.addEventListener('mouseover', _handleHover, false);
				row.appendChild(cell);
				cellsArray[i-1][j-1] = cell; // let's save the reference
			}
			options.mockCnt.appendChild(row);
		}
	};
	
	var _bindClick = function () {
		document.getElementById('table-mock').addEventListener('click', function () {
			document.getElementById('output-container').textContent = _generateCode(); //bleh XD
			_playTransition();
		}, false);
	};

	var _playTransition = function () {
		console.log('transition');
	};
	var setTableMockContainer = function (el) {
		options.mockCnt = el;
	};
	
	var run = function (opt) {
		_initialize();
		_buildMock();
		_bindClick();
	}
	
	return {
		run: run,
		setTableMockContainer: setTableMockContainer
	}
})();

var cnt = document.getElementById('table-mock');

Tablegen.setTableMockContainer(cnt);
Tablegen.run();