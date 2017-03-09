import { SantanderAppPage } from './app.po';

describe('santander-app App', () => {
  let page: SantanderAppPage;

  beforeEach(() => {
    page = new SantanderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
