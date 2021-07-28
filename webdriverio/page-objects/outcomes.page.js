const Page = require('./page').default;


class Outcomes extends Page {

  constructor() {
    super('./outcomes');
  }

  get navBar() { return $('[data-test-id="outcomes-navbar"'); }
  get statsBig() { return $('[data-test-id="points-21-big-text"'); }
  get statsContent() { return $('[data-test-id="statistics-item-content-text-0"'); }
  get statsLarge1() { return $('[data-test-id="points-35-big-text"'); }
  
  variableElement(dataTestId) { return $(`[data-test-id="${dataTestId}"`); }

}
exports.default = Outcomes
