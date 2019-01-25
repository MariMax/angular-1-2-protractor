import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getA1Text() {
    return element(by.css('.a1-span')).getText();
  }
  getA2Text() {
    return element(by.css('.a2-span')).getText();
  }
}
