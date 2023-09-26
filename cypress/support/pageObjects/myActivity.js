class myActivity {
  getEnterworkflows() {
    return cy.iframe().find('input[name="workflow-input"]');
  }
  getEnterFlow() {
    return cy.iframe().find(".mat-option-text");
  }
  getProfileNameMyActivity() {
    return cy.iframe().find(".decoration").eq(7);
  }
}

export default myActivity;
