import { ResumeTemplatePage } from './app.po';

describe('resume-template App', () => {
  let page: ResumeTemplatePage;

  beforeEach(() => {
    page = new ResumeTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
