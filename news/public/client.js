window.addEventListener('load', function () {
	var title = document.getElementById('title'),
        selectList = document.getElementById('selectSite'),		        

		rangeControl = document.getElementById('rangeControl'),
		qtyArticle = document.getElementById('qtyArticle');

	function getSelectedSiteName () {	
		var regionId = selectList.options[selectList.selectedIndex].value;	    
        title.innerHTML = regionId;
	};

	function getQtyArticle () {
		qtyArticle.innerHTML = rangeControl.value;
	};

	selectList.addEventListener('change', getSelectedSiteName);
	rangeControl.addEventListener('change', getQtyArticle);
});