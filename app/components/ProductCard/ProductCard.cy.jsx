import React from 'react'
import ProductCard from './ProductCard'

describe('<ProductCard />', () => {
  const item = {
    "name": "Leche",
    "price": 75000,
    "amount": 2,
    "id": 1
    }
    
  it('renders', () => {
    cy.mount(<ProductCard item={item} />)
    cy.get(".name_product").should("contain.text", item.name);
    cy.get("[data-cy=price]").should("contain.text", item.price);
    cy.get(".store").should("contain.text", item.amount);
  })
    //Add and less products
  it('buttons action', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    cy.mount(<ProductCard item={item} onClick={onClickSpy} />)
    cy.get("[data-cy=add]").click();
    cy.get(".amount").should("contain.text", "2");
    cy.get("[data-cy=less]").click();
    cy.get(".amount").should("contain.text", "1");
    cy.get(".add_button").click();
    cy.get('@onClickSpy').should('have.been.calledWith', item, 1);
  })
})