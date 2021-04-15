const Careers = require('../page-objects/careers.page').default;

before(() => {
  careers = new Careers({});
});

describe('Careers page', () => {
  it('Careers has quote', () => {
    careers.open();
    careers.quote.waitForDisplayed();
    const quoteText = '“Work & Co’s employees are treated a bit differently… This might be why the agency has a 93 percent employee retention rate.”'
    expect(careers.quote.getText()).to.equal(quoteText);
  });
  it('Careers page - logo is visible', () => {
    expect(careers.logo.isDisplayed()).to.equal(true);
  });
});
