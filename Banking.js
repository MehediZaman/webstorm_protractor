describe("Test Automation of Banking app",function(){
	
	it("Validating customer login",function(){
		
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		element(by.buttonText("Customer Login")).click();

		expect(browser.getTitle()).toContain("Protractor practice website - Banking App");
		
		browser.sleep(3000);
		
		element.all(by.css("#userSelect option")).then(function(items){
			
			//printing values from dropdown list
			console.log("----------printing values from dropdown list---------");
			console.log("Total values in dropdown are: "+items.length);
			
			for(i=0;i<items.length;i++){
				items[i].getText().then(function(text){
					console.log(text);
				});
			}
			
			//printing value attributes from dropdown list
			console.log("----------printing value attributes from dropdown list---------");
			
			
			for(i=0;i<items.length;i++){
				items[i].getAttribute("value").then(function(text){
					console.log(text);
				});
			}
			
			element(by.model("custId")).element(by.css("[value='2']")).click();
			//element(by.model("custId")).$("[value='2']").click();
		
			element(by.buttonText("Login")).click();
			
			/*
			element(by.binding("user")).getText().then(function(text){

				console.log(text);

			});
*/
			expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
			
			browser.sleep(3000);


		});
		
	});
	
});
