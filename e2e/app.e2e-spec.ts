import { JwtPocPage } from './app.po';

describe('jwt-poc App', () => {
  let page: JwtPocPage;

  beforeEach(() => {
    page = new JwtPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
