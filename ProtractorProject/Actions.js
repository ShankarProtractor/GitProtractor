describe("Actions Demo",function(){
	
	it("Open Posse Website",function(){
		
		
		browser.get('https://Posse.com/')
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		
		browser.actions.sendKeys(protractor.key.ARROW_DOWN);
		browser.actions.sendKeys(protractor.key.ENTER).then(function(){
			
			console.sleep(5000);
			
		expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual();
		element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
		element.all(by.css("a[ng-href*='London/River Island']")).click().then(function()
		{
				browser.getAllWindowHandles().then(function(handles){
					
					browser.switchTo().window(handle[1]);
					browser.getTitle().then(function(title){
						console.log(title+" title of the page after Switch");
					})
					
					browser.switch().window(handle[0]);
					
					browser.getTitle().then(function(title){
						
						console.log(title);
					})
				});
				
		
		});
		});
			
		});
		
				
	});