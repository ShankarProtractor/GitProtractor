describe('element basics in Protractor',function(){
	
	function Add(a,b)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b)
	
		element(by.id("gobutton")).click();
	
	}
	
	it('Locators',function(){
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		/*element(by.model("first")).sendKeys("7");
		element(by.model("second")).sendKeys("5")
		
		element(by.id("gobutton")).click();
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4")
		
		element(by.id("gobutton")).click();
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("8")
		
		element(by.id("gobutton")).click();*\
		
		/*element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
		
		{
			console.log(text);
		});*/
		
		Add(3,4);
		Add(2,4);
		Add(7,4);
		Add(3,8);
		Add(3,7);
		Add(3,9);
		Add(3,5);
		
		element.all(by.repeater("result in memory")).count().then(function(text)
		{
			console.log(text);			
		});
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text)
			{
				console.log(text);
			});	
			
		});	
		
	});
	
	

});