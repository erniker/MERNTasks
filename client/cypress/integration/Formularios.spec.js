/* eslint-disable no-undef */
///<reference types="cypress"/>

describe("<Formularios/>", () => {
  it("<Login/> - Verificar pantalla de inicio", () => {
    // Visitar pantalla de inicio
    cy.visit("/");
    // Probar el texto
    // cy.contains("h1", "Iniciar Sesión"); --> Mala practica
    cy.get("[data-cy=titulo]").invoke("text").should("equal", "Iniciar Sesión"); //--> Buena Practica

    // Revisar que el formulario exista
    cy.get("[data-cy=form-login]").should("exist");

    // Revisar los dos inputs
    cy.get("[data-cy=email-input]").should("exist");
    cy.get("[data-cy=password-input]").should("exist");

    // Revisar boton de submit
    cy.get("[data-cy=submit-login]")
      .should("exist")
      .should("have.value", "Iniciar Sesión")
      .should("have.class", "btn-primario")
      .and("have.class", "btn");

    cy.get("[data-cy=nueva-cuenta]")
      .should("exist")
      .should("have.prop", "tagName")
      .should("eq", "A");

    cy.get("[data-cy=nueva-cuenta]")
      .should("have.attr", "href")
      .should("equal", "/sing-up");

    // Visit "nueva cuenta"
    cy.visit("/sing-up");
  });

  it("<SingUp/> - Verificar componente de nueva cuenta", () => {
    cy.get("[data-cy=titulo]")
      .should("exist")
      .invoke("text")
      .should("equal", "Crear cuenta");

    cy.get("[data-cy=nueva-cuenta]").should("exist");

    cy.get("[data-cy=nombre-input]").should("exist");
    cy.get("[data-cy=email-input]").should("exist");
    cy.get("[data-cy=password-input]")
      .should("exist")
      .should("have.prop", "type")
      .should("equal", "password");
    cy.get("[data-cy=repetir-password-input]")
      .should("exist")
      .should("have.prop", "type")
      .should("equal", "password");
    cy.get("[data-cy=submit-nueva-cuenta]")
      .should("exist")
      .should("have.class", "btn-primario")
      .should("have.value", "Registrarme")
      .should("not.have.value", "Crear Nueva Cuenta");

    cy.get("[data-cy=enlace-login]")
      .should("exist")
      .should("have.attr", "href")
      .should("eq", "/");

    cy.visit("/");
  });
});
