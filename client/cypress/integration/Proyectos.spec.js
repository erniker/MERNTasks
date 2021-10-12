/* eslint-disable no-undef */
///<reference types="cypress"/>

describe("Administrador", () => {
  it("<Login/> - Validación", () => {
    cy.visit("/");

    //Llenar formulario
    cy.get("[data-cy=email-input]").type("persona@gmail.com");
    cy.get("[data-cy=password-input]").type("1234=Abcd");
    cy.get("[data-cy=submit-login]").click();
    cy.get("[data-cy=selecciona]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un Proyecto");
  });

  it("<Proyectos/> - Validar Proyectos", () => {
    cy.get("[data-cy=boton-nuevo-proyecto]").click();
    cy.get("[data-cy=submit-nuevo-proyecto]").click();
    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El nombre del Proyecto es obligatorio");

    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");
  });

  it("<Proyectos/> - Creacion de Proyectos", () => {
    cy.get("[data-cy=input-nuevo-proyecto]").type("tienda Virtual");
    cy.get("[data-cy=submit-nuevo-proyecto]").click();

    //Seleccionar el proyecto
    cy.get("[data-cy=listado-proyectos] li:nth-child(1) button").click();
  });

  it("<Tareas/> - Validación y Creacion de tareas", () => {
    cy.get("[data-cy=submit-tarea]").click();
    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El nombre de la tarea es obligatorio");

    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");

    // Creacion de tarea
    cy.get("[data-cy=input-tarea]").type("Definir diseño");
    cy.get("[data-cy=submit-tarea]").click();
    cy.get("[data-cy=input-tarea]").type("Definir tipografía");
    cy.get("[data-cy=submit-tarea]").click();
    cy.get("[data-cy=input-tarea]").type("Definir colores");
    cy.get("[data-cy=submit-tarea]").click();
  });

  it("<Tareas/> - Completar, Descompletar, Editar, y Eliminar Tarea", () => {
    //Selecciona la primera tarea y la completa
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea-incompleta]").click();
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea-completa]").should(
      "have.class",
      "completo"
    );

    // Selecciona la primera tarea y la desmarca como completa
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea-completa]").click();
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea-incompleta]").should(
      "have.class",
      "incompleto"
    );

    //Edicion
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=btn-editar]").click();
    cy.get("[data-cy=input-tarea]").clear().type("TAREA ACTUALIZADA");
    cy.get("[data-cy=submit-tarea]").click();

    //Eliminar
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=btn-eliminar]").click();
    cy.get("[data-cy=tarea]:nth-child(1)")
      .invoke("text")
      .should("not.equal", "TAREA ACTUALIZADA");
  });
});
