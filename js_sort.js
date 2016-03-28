// TODO refactor & lint
var sortables = document.getElementsByClassName('sortable'),
	      len = sortables.length;

for (var i = len; i--;) {
	makeSortable(sortables[i]);
}

function makeSortable(el, optionsContainer) {
	if (!el) 
		return;
	console.log(el);
	// TODO optionsContainer jako factory/builder
	var optionsContainer = document.createElement('div');
	optionsContainer.innerHTML = '<a id="handler" href="javascript: void(0);">sortuj</a>';
	optionsContainer.targetSortable = el;
	//optionsContainer = optionsContainer || 
	el.parentNode.insertBefore(optionsContainer, el);
	// TODO zrozumiec dlaczego to dziala (dlaczego insertBefore wypierdala tamte elementy?)
	document.getElementById('handler').addEventListener('click', function () {
		var el = this.parentNode.targetSortable;
		
		var arr = [].slice.call(el.children);
		console.log(arr);
		var sorted = arr.sort(function (a, b) {
			if (a.textContent > b.textContent)
				return 1;
			if (a.textContent < b.textContent)
				return -1;
			return 0;
		});
		
		var len = arr.length;
		console.log(len);
		for (var i = len; i--;) {
			el.insertBefore(sorted[i], el.firstChild)
		}
		
	}, false);
}