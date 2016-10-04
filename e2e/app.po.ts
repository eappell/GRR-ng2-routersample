import { browser, element, by } from 'protractor/globals';

export class Routerv3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
