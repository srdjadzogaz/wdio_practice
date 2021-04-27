const Axe = require('../../helpers/a11yFunctions').default;
const Homepage = require('../../page-objects/homepage.page').default;

before(() => {
  homepage = new Homepage({});
  axe = new Axe({});
  axe.deleteReportFile('axeHomepageReport');
});

describe('Accessabilities test for Homepage - ', () => {
  it('Check axe violations and create report file - axeHomepageReport.json', () => {
    homepage.open();
    homepage.pageTitle.waitForDisplayed();
    let result = axe.axeViolations();
    console.info(`Number of violations: ${result.violations.length}`);
    for (let i = 0; i < result.violations.length; i++) {
      const report = {
        desc: result.violations[i].description,
        impact: result.violations[i].impact,
        html: result.violations[0].nodes[0].html,
      };
      axe.writeReport(report, 'axeHomepageReport');
    }
  });
});
