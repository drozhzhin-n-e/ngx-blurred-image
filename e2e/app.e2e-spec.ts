import { BlurredImageAppPage } from './app.po';

describe('blurred-image-app App', () => {
  let page: BlurredImageAppPage;

  beforeEach(() => {
    page = new BlurredImageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
