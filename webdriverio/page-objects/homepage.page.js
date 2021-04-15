const Page = require('./page').default;

class Homepage extends Page {
  constructor() {
    super('./');
  }

  get pageTitle() { return $('[data-test-id="header-title-text"'); }

}
exports.default = Homepage
