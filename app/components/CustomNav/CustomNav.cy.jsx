import React from 'react'
import CustomNav from './CustomNav'
import { store } from 'app/app/redux/store'
import { setAddItemsState } from 'app/app/redux/Features/products/productsSlice'

describe('<CustomNav />', () => {
  

  it('renders', () => {
    const item = {
      "name": "Leche",
      "price": 75000,
      "amount": 2,
      "id": 1
    }
    store.dispatch(setAddItemsState(item));
    console.log("🚀 ~ file: CustomNav.cy.jsx:17 ~ it ~ store:", store.getState().products)
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomNav />, { reduxStore: store })
    cy.viewport(1024, 768)
    cy.get('a').contains('Productos').should("be.visible");
    cy.get('a').contains('Add Item').should("be.visible");
    cy.get('a').contains('Test de Lógica').should("be.visible");
    cy.get('a[href*="checkout"]').should("be.visible");
    cy.viewport(375,667)
    cy.get("[data-cy=menu]").should("be.visible");
    cy.get(".num_cart").should("contain.text", store.getState().products.length);
    cy.get("[data-cy=menu]").click();
    cy.get('a').contains('Productos').should("be.visible");
    cy.get('a').contains('Add Item').should("be.visible");
    cy.get('a').contains('Test de Lógica').should("be.visible");
  })
})