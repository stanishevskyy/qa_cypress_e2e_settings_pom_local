import PageObject from '../PageObject';

class UserPage extends PageObject {
  url = '/';

  get subscribeBtn() {
    return cy.getByDataCy('subcribe-btn');
  }

  clickSubscribeBtn() {
    this.subscribeBtn.click();
  }

  verifySubscribeBtnText(expectedText) {
    this.subscribeBtn.should('contain', expectedText);
  }
}

export default UserPage;