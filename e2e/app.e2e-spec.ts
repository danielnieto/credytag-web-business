import { CredytagWebBusinessPage } from './app.po';

describe('credytag-web-business App', function() {
  let page: CredytagWebBusinessPage;

  beforeEach(() => {
    page = new CredytagWebBusinessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
