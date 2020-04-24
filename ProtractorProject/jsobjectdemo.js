/**
 * 
 */

function car()
{
	
	this.firstInput=element(by.model("first"));
	this.secondInput=element(by.model("second"));
	this.gobutton=element(by.id("gobutton"));
	this.result=element(by.css("h2[class='ng-binding']"));
	this.colors="Blue";
	this.engine="turbo";
	this.brand="Maruti";
	
	this.getURL=function()
	{
		browser.get('https://juliemr.github.io/protractor-demo/');
	}

}

module.exports= new car();
/*var a = new car();
a.getmodel();
console.log(a.colors);*/


