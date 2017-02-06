import { TestConferencesPage } from './app.po';

describe('test-conferences App', function() {
  let page: TestConferencesPage;

  beforeEach(() => {
    page = new TestConferencesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
