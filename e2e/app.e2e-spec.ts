import { MarketAppPage } from './app.po';

describe('market-app App', () => {
  let page: MarketAppPage;

  beforeEach(() => {
    page = new MarketAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
