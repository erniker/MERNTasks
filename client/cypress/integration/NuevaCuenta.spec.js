/* eslint-disable no-undef */
///<reference types="cypress"/>

describe("<NuevaCuenta/>", () => {
  it("<NuevaCuenta/> - Validación, Alertas y crear nueva cuenta", () => {
    cy.visit("/sing-up");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "All fields are required.");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    //Llenado del formulario
    cy.get("[data-cy=nombre-input]").type("Mr. Persona");
    cy.get("[data-cy=email-input]").type("persona@gmail.com");
    cy.get("[data-cy=password-input]").type("1234");
    cy.get("[data-cy=repetir-password-input]").type("1234");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should(
        "equal",
        "Please enter a password with at least 8 character and contain at least one uppercase, one lower case and one special character."
      );

    cy.get("[data-cy=password-input]").clear().type("1234=Abcd");
    cy.get("[data-cy=repetir-password-input]").clear().type("1234=Abce");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Pasword and Confirm password must be equal.");

    cy.get("[data-cy=password-input]").clear().type("1234=Abcd");
    cy.get("[data-cy=repetir-password-input]").clear().type("1234=Abcd");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=selecciona]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un Proyecto");

    cy.get("[data-cy=cerrar-sesion]").click();
  });

  it("<NuevaCuenta/> - Revisar usuarios Duplicados", () => {
    cy.visit("/sing-up");
    //Llenado del formulario
    cy.get("[data-cy=nombre-input]").type("Mr. Persona");
    cy.get("[data-cy=email-input]").type("persona@gmail.com");
    cy.get("[data-cy=password-input]").type("1234=Abcd");
    cy.get("[data-cy=repetir-password-input]").type("1234=Abcd");

    cy.get("[data-cy=submit-nueva-cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "User already exists");
  });
});
