import { A2phonesPage } from './app.po';

describe('a2phones App', function() {
  let page: A2phonesPage;

  beforeEach(() => {
    page = new A2phonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
