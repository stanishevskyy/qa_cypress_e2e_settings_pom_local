import PageObject from '../PageObject';

class SettingsPageObject extends PageObject {
  url = '/';

  get settingsButton() {
    return cy.getByDataCy('settings');
  }

  get usernameInput() {
    return cy.getByDataCy('user-username');
  }

  get userBioInput() {
    return cy.getByDataCy('user-bio');
  }

  get emailInput() {
    return cy.getByDataCy('user-email');
  }

  get passwordInput() {
    return cy.getByDataCy('user-password');
  }

  get updateButton() {
    return cy.getByDataCy('btn-updated');
  }

  get logoutBtn() {
    return cy.getByDataCy('logout-btn');
  }

  openSettings() {
    this.settingsButton.click();
  }

  updateField(fieldElement, value) {
    fieldElement.clear().type(value);
    this.updateButton.click();
  }
}

export default SettingsPageObject;