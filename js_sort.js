// TODO refactor & lint
var sortables = document.getElementsByClassName('sortable'),
          len = sortables.length;

document.getElementById('btn-make-sortable').addEventListener('click', function () {		  
	for (var i = len; i--;) {
		makeSortable(sortables[i]);
	}
});

function makeSortable(el, optionsContainer) {
	if (!el) 
		return;
	if (!optionsContainer) {
		var optionsContainer = document.createElement('div');
		optionsContainer.innerHTML = '<a id="handler" href="javascript: void(0);">sortuj</a>';
	}
	console.log(el)
	// TODO optionsContainer jako factory/builder
	optionsContainer.targetSortable = el;
	//optionsContainer = optionsContainer || 
	el.parentNode.insertBefore(optionsContainer, el);
	var toggler = true;
	document.getElementById('handler').addEventListener('click', function () {
		var el = this.parentNode.targetSortable;
		console.log('el', el);
		// TODO rozumiec doglebnie te linijke 
		var arr = [].slice.call(el.children);
		console.log('arr', arr);
		var sorted = arr.sort(function (a, b) {
			if (a.textContent > b.textContent)
				return 1;
			if (a.textContent < b.textContent)
				return -1;
			return 0;
		});
		if (toggler) 
			toggler = false;
		else {
			arr.reverse();
			toggler = true;
		}
		console.log('arr po przesort', arr);
		// nie tworzylismy nowych elementow tylko mamy odnosniki do istniejacych - insertBefore przełoży je więc
		for (var i = arr.length; i--;) 
			el.insertBefore(sorted[i], el.firstChild)
	}, false);
}