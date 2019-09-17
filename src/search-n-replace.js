if(typeof jQuery=='undefined') {
    console.log("You need jQuery to run this!")
}else{
	
	$.fn.column_search_replace = function(options){
		var defaults = {
			inputClasses: 'form-control',
			dropdownId: 'columnSelect',
			searchInputId: 'searchInput',
			replaceInputId: 'replaceInput'
		}
		var settings = $.extend({}, defaults, options);
		var self = $(this);
		var columnHeader = self.find('thead tr td, thead tr th, tr th');
		var columnList = [];
		if(columnHeader.length > 0){
			columnHeader.each((i,ele)=>{
				columnList.push($(ele).text().trim())
			})
		}
		
		self.before('<div class="row mb-2 wrapper"></div>')
		var theWrapper = $('.wrapper')
		theWrapper.append('<div class="col-md-4"><label>Search</label><input type="search" class="'+settings.inputClasses+'" id="'+settings.searchInputId+'" placeholder="Search For"/></div>');
		theWrapper.append('<div class="col-md-4"><label>Replace</label><input class="'+settings.inputClasses+'" id="'+settings.replaceInputId+'" placeholder="Replace With"/></div>');
		theWrapper.append('<div class="col-md-4"><label>Column to replace</label><select class="'+settings.inputClasses+'" id="'+settings.dropdownId+'"></select></div>');
		var searchInput = $("#"+settings.searchInputId);
		var replaceInput = $("#"+settings.replaceInputId);
		var select = $("#"+settings.dropdownId);
		select.empty().append('<option>Select Column</option>');
		$.each(columnList, (i, p)=>{
		  select.append($('<option></option>').val(i).html(p));
		});

		select.change(function() {
			var selectself = $(this)
			var index = selectself.val()
			var rowcell, regexsearch, replacestring
			self.find('tbody tr').each(
			  (i,item)=>{
				rowcell = $(item).children('td').eq(index)
				regexsearch = new RegExp(searchInput.val());
				replacestring = rowcell.text().replace(regexsearch, replaceInput.val())
				rowcell.text(replacestring)
			  }
			)
			select.prop('selectedIndex',0);
		});
	}
}