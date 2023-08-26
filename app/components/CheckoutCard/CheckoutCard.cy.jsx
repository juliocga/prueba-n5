import React from 'react'
import CheckoutCard from './CheckoutCard'

describe('<CheckoutCard />', () => {
  const item = {
    "name": "Leche",
    "price": 75000,
    "amount": 2,
    "id": 1
    }

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CheckoutCard item={item}/>)
    cy.get("[data-cy=name]").should("contain.text", item.name);
    cy.get("[data-cy=price]").should("contain.text", item.price);
    cy.get("[data-cy=amount]").should("contain.text", item.amount);
    cy.get("[data-cy=total]").should("contain.text", item.amount * item.price);
  })
})