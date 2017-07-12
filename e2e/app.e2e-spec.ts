import { Sampleng2Page } from './app.po';

describe('sampleng2 App', () => {
  let page: Sampleng2Page;

  beforeEach(() => {
    page = new Sampleng2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
