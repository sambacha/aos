describe('setting: startEvent', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should allow to initialize AOS on custom event', () => {
    cy.initAOS({
      startEvent: 'customEvent'
    });

    cy.get('.aos-init').should('have.length', 0);
    cy.dispatchEvent('customEvent');
    cy.get('.aos-init').should('have.length', 24);
  });

  it('Should properly initialize on "load" event', () => {
    cy.initAOS({
      startEvent: 'load'
    });

    cy.window().then(window => window.dispatchEvent(new Event('load')));

    cy.get('.aos-init').should('have.length', 24);
  });

  it("Shouldn't initialize when event is not dispatched", () => {
    cy.initAOS({
      startEvent: 'another-event-name'
    });

    cy.get('.aos-init').should('have.length', 0);
  });
});
