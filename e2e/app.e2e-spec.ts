import { Routerv3Page } from './app.po';

describe('routerv3 App', function() {
  let page: Routerv3Page;

  beforeEach(() => {
    page = new Routerv3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
