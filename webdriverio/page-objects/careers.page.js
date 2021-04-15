const Page = require('./page').default;

class Careers extends Page {
  constructor() {
    super('./careers');
  }

  get quote() { return $('[data-test-id="undefined-section-quote"'); }

}
exports.default = Careers
