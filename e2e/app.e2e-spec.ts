import { PlanterPage } from './app.po';

describe('planter App', () => {
  let page: PlanterPage;

  beforeEach(() => {
    page = new PlanterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
