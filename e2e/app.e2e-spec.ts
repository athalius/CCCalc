import { CastleClashCalculatorPage } from './app.po';

describe('castle-clash-calculator App', () => {
  let page: CastleClashCalculatorPage;

  beforeEach(() => {
    page = new CastleClashCalculatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
