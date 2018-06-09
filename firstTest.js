describe("Entering input into inputbox",function(){
	
	it("Executing input box test",function(){
		
		browser.get("https://www.angularjg.org");
		element(by.model("yourName")).sendkeys("Hello Mehedi");
		element(by.binding("yourName")).getText().then(function(text){
			
			console.log(text);
		});
		
	});
	
});


/*describe("Entering",function(){
	
	it("Entering",function(){
		
	});
	
});
*/