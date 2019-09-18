var assert = chai.assert;
		var expect = chai.expect;

		describe('check jQuery', function() {
			it('jQuery should defined', function() {
				assert.isDefined($, "jQuery is defined");
			});
		});
		
		describe("jQuery.fn.column_search_replace", function(){
		  it("Check If the table exist", function(){
			expect($('table')).to.exist;
		  });
		  
		  it("Check If two inputs fields are there", function(){
			expect($('table').parent().find('input')).to.have.length(2)
		  });
		  it("Check If one select fields is there", function(){
			expect($('table').parent().find('select')).to.have.length(1)
		  });
		});