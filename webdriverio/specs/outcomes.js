const Outcomes = require('../page-objects/outcomes.page').default;
const outcomesPageData = require("../page-data/outcomes.json");
// const outcomesData = JSON.parse(testDataObject)

before(() => {
  outcomes = new Outcomes({});
});

describe('Outcomes page', () => {
  it('Outcomes page - logo is visible', () => {
    outcomes.open();
    outcomes.logo.waitForDisplayed();
    expect(outcomes.logo.isDisplayed()).to.equal(true);
  });
  it('Outcomes stat big - is correct', () => {
    expect(outcomes.statsBig.getText()).to.equal("2.1");
  });
  it('Outcomes stat content - is correct', () => {
    expect(outcomes.statsContent.getText()).to.equal("Subscribers for YouTube TV\nWe collaboratively defined the feature set, designed and prototyped the product, and set the long-term roadmap.");
  });
  it('Outcomes stat large 1 - is correct', () => {
  expect(outcomes.statsLarge1.getText()).to.equal("3.5");
  });

// Compare site data with predefined JSON file
outcomesPageData.Elements.forEach( element => {
  it('Outcomes stats item' + element.dataId + ' - is correct', () => {
      expect(outcomes.variableElement(element.dataId).getText()).to.equal(element.value)
    });
});
});
