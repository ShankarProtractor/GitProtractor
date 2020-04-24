describe("firstscript",function(){
	
	it("title",function(){
		browser.get("https://angularjs.org");
		
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			
			console.log("I am the last step to execute");
			
		});
		
		
		
	});
});