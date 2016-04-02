var currentRows = 1,
	currentCols = 1,
	tdWidth = 46,
	tdHeight = 20,
	tableMock = document.getElementById('table-mock'),
	rows = tableMock.getElementsByTagName('tr'),
	rowsCount = document.getElementById('rows-count'),
	colsCount = document.getElementById('cols-count');
		
function insertNewRow() {
	currentRows++;
	var newRow = document.createElement('tr');
	for (var i = currentCols; i--; )
		newRow.appendChild(document.createElement('td'));
	tableMock.appendChild(newRow); // tbody ??
}	
	
function insertNewColumn() {
	currentCols++;
	[].forEach.call(rows, function (row) {
		row.appendChild(document.createElement('td'));
	});
}	

function updateInfo() {
	rowsCount.textContent = currentRows;
	colsCount.textContent = currentCols;
}

document.addEventListener('mousemove', function (e) {
	var x = e.clientX,
	    y = e.clientY;
	
	console.log(x, y);
	// nie jestesmy w obszarze; 9, 139 
	if (y < tableMock.offsetTop || x < tableMock.offsetLeft)
		return;
	
	if (x > currentCols * tdWidth)
		insertNewColumn();
	
	if (y - tableMock.offsetTop > currentRows * tdHeight)
		insertNewRow();
	
	updateInfo();
	
}, false);