const Homepage = require('../page-objects/homepage.page').default;

before(() => {
  homepage = new Homepage({});
});

describe('Homepage', () => {
  it('Homepage has header title', () => {
    homepage.open();
    homepage.pageTitle.waitForDisplayed();
    expect(homepage.pageTitle.getText()).to.equal("We design and ship digital products that transform companies.");
  });
  it('Homepage logo is visible', () => {
    expect(homepage.logo.isDisplayed()).to.equal(true);
  });
});
