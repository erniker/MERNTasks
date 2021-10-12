/* eslint-disable no-undef */
///<reference types="cypress"/>

describe("<Login/>", () => {
  it("<NuevaCuenta/> - Validación, Alertas y Autenticacion de Usuario", () => {
    cy.visit("/");
    cy.get("[data-cy=submit-login]").click();
    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "All fields are required.");
    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    //Probar que el usuario introducido no existe
    cy.get("[data-cy=email-input]").type("noexiste@gmail.com");
    cy.get("[data-cy=password-input]").type("1234=Abcd");
    cy.get("[data-cy=submit-login]").click();
    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "The user does not exists, or password is incorrect");
    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    //Probar que el password introducido es erroreno
    cy.get("[data-cy=email-input]").clear().type("persona@gmail.com");
    cy.get("[data-cy=password-input]").clear().type("1235=Abcd");
    cy.get("[data-cy=submit-login]").click();
    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "The user does not exists, or password is incorrect");
    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    // Autenticar usuario
    cy.get("[data-cy=email-input]").clear().type("persona@gmail.com");
    cy.get("[data-cy=password-input]").clear().type("1234=Abcd");
    cy.get("[data-cy=submit-login]").click();
    cy.get("[data-cy=selecciona]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un Proyecto");

    // Cerramos sesion
    cy.get("[data-cy=cerrar-sesion]").click();
  });
});
