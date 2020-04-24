describe('element basics in Protractor',function(){
	
	var obj=require("./jsobjectdemo.js");
	var using=require('jasmine-data-provider');
	var d = require("./data.js");
	
	beforeEach(function(){
	
		obj.getURL();
	})
	
	using(d.Datadriven, function (data, description){
		
		it('Testing functionality'+description,function(){
			
			/*browser.waitForAngularEnabled(false);
			browser.get('http://google.com');*/
			
			//obj.getURL();
			
					
			obj.firstInput.sendKeys(data.firstInput);
			obj.secondInput.sendKeys(data.secondInput);
			
			obj.gobutton.click();
			//tagname[attribute='value']
			
			expect(obj.result.getText()).toBe(data.result);
			
			obj.result.getText().then(function(text)
			{
				console.log(text);
			});
							
			
		});
	})
	
	
	
	
	afterEach(function(){
		
		console.log("test is completed");
	});
	

});