import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message from a1', () => {
    page.navigateTo();
    expect(page.getA1Text()).toEqual('hello from a1');
  });
  it('should display welcome message from a2', () => {
    page.navigateTo();
    expect(page.getA2Text()).toEqual('hello from a2');
  });
});
