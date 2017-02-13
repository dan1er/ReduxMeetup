import { ReduxIntroductionPage } from './app.po';

describe('redux-introduction App', function() {
  let page: ReduxIntroductionPage;

  beforeEach(() => {
    page = new ReduxIntroductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
