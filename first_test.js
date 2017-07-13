
Feature('First');

Scenario('test something', (I) => {
	I.amOnPage('https://www.google.com/');
	I.saveScreenshot('page-before.jpg',true);
	I.fillField('q','wow');
	I.saveScreenshot('page-meanwhile.jpg',true);
	I.pressKey('Enter');
	I.saveScreenshot('page-after.jpg',true);
	I.see('warcraft');
});
