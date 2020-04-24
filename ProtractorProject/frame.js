describe("firstscript",function(){
	
	it("title",function(){
		
		browser.waitForAngularEnabled(false);
		
		browser.get('http://qaclickacademy.com/practice.php');
			
		element(by.id("confirmbtn")).click();
		
		browser.switchTo().alert().dismiss().then(function()
		{
			console.sleep(5000);
		});
		
	});
});