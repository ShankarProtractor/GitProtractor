describe('element basics in Protractor',function(){
	
	function Calc(a,b,c)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b)
		
		element.all(by.tagName("option")).each(function(item)
		{
			item.getAttribute("value").then(function(value)
			{
				
				if(value==c)
					{
					item.click();
					}
			});
		
		});
	
		element(by.id("gobutton")).click();
	
	}
	
	it('Locators',function(){
		
		browser.get('https://juliemr.github.io/protractor-demo/');	
			
		Calc(10,5,"MULTIPLICATION");
		Calc(8,4,"DIVITION");
		Calc(5,4,"ADDITION");
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text)
			{
				console.log(text);
			});	
			
		});	
			
		});		
		
	});
	
	

