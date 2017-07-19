import { GivemoPage } from './app.po';

describe('givemo App', () => {
  let page: GivemoPage;

  beforeEach(() => {
    page = new GivemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
